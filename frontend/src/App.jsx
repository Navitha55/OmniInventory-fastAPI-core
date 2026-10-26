import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:8000';

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', price: '', quantity: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_URL}/products`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching inventory data:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      description: form.description,
      price: parseFloat(form.price),
      quantity: parseInt(form.quantity)
    };

    try {
      if (editId !== null) {
        await fetch(`${API_URL}/products/${editId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        setEditId(null);
      } else {
        await fetch(`${API_URL}/products`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      }
      setForm({ name: '', description: '', price: '', quantity: '' });
      fetchProducts();
    } catch (err) {
      console.error("Error saving product entry:", err);
    }
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity
    });
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/products/${id}`, { method: 'DELETE' });
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <div className="inventory-container">
      <header className="inventory-header">
        <div>
          <h1>OmniInventory 📦</h1>
          <p>Advanced Stock & Product Management System (INR Edition)</p>
        </div>
        <div className="badge-counter">
          Active Stock Items: {products.length}
        </div>
      </header>

      <div className="inventory-grid">
        {/* Form Card */}
        <div className="inventory-card">
          <h2>{editId !== null ? '✏️ Edit Product' : '➕ Add New Product'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Product Name</label>
              <input 
                type="text" 
                placeholder="e.g. Boat Airdopes / Dell Inspiron"
                value={form.name} 
                onChange={(e) => setForm({...form, name: e.target.value})} 
                required 
              />
            </div>
            <div className="input-group">
              <label>Description</label>
              <input 
                type="text" 
                placeholder="e.g. Wireless bluetooth earbuds"
                value={form.description} 
                onChange={(e) => setForm({...form, description: e.target.value})} 
              />
            </div>
            <div className="input-group">
              <label>Price (₹)</label>
              <input 
                type="number" 
                step="0.01" 
                placeholder="e.g. 1499.00"
                value={form.price} 
                onChange={(e) => setForm({...form, price: e.target.value})} 
                required 
              />
            </div>
            <div className="input-group">
              <label>Quantity in Stock</label>
              <input 
                type="number" 
                placeholder="e.g. 25"
                value={form.quantity} 
                onChange={(e) => setForm({...form, quantity: e.target.value})} 
                required 
              />
            </div>
            <button type="submit" className="btn-submit">
              {editId !== null ? 'Update Product Details' : 'Save to Inventory'}
            </button>
            {editId !== null && (
              <button 
                type="button" 
                className="btn-cancel" 
                onClick={() => { setEditId(null); setForm({ name: '', description: '', price: '', quantity: '' }); }}
              >
                Cancel Editing
              </button>
            )}
          </form>
        </div>

        {/* Product Table List Card */}
        <div className="inventory-card">
          <h2>📋 Current Inventory Stock</h2>
          {products.length === 0 ? (
            <p style={{ color: '#64748b', fontStyle: 'italic' }}>No products registered yet. Add your first item using the form on the left!</p>
          ) : (
            <div className="table-responsive">
              <table className="inventory-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id}>
                      <td>#{p.id}</td>
                      <td><strong>{p.name}</strong></td>
                      <td>{p.description || '—'}</td>
                      <td>₹{p.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      <td>
                        <span style={{ 
                          padding: '0.25rem 0.6rem', 
                          borderRadius: '4px', 
                          background: p.quantity > 5 ? '#dcfce7' : '#fee2e2',
                          color: p.quantity > 5 ? '#166534' : '#991b1b',
                          fontWeight: '600',
                          fontSize: '0.85rem'
                        }}>
                          {p.quantity} units
                        </span>
                      </td>
                      <td>
                        <button className="btn-action-edit" onClick={() => handleEdit(p)}>Edit</button>
                        <button className="btn-action-delete" onClick={() => handleDelete(p.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;