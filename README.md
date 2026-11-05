# OmniInventory | Product Inventory Management System

A full-stack product inventory management application built with **FastAPI** and **React**, designed to simplify product tracking and inventory management. OmniInventory provides RESTful APIs for managing product records, backed by a PostgreSQL database.

## 🚀 Live Application

- **Frontend:** https://omni-inventory-fast-api-core.vercel.app/
- **Backend API:** https://omniinventory-api.onrender.com
- **API Documentation:** https://omniinventory-api.onrender.com/docs

## ✨ Features

- **Product Management:** Create, view, update, and delete product records.
- **RESTful API:** Fast and efficient API endpoints powered by FastAPI.
- **Database Integration:** Persistent data storage using PostgreSQL.
- **Dynamic Frontend:** React-based user interface for managing inventory.
- **API Documentation:** Interactive API documentation using Swagger UI.
- **Cross-Origin Support:** Configured CORS middleware for frontend-backend communication.

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React.js, JavaScript, CSS |
| Backend | Python, FastAPI |
| Database | PostgreSQL |
| ORM | SQLAlchemy |
| Data Validation | Pydantic |
| API Server | Uvicorn |
| Backend Hosting | Render |
| Frontend Hosting | Vercel |
| Database Hosting | Aiven |


## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Navitha55/OmniInventory-fastAPI-core.git

cd OmniInventory-fastAPI-core
```

### 2. Set Up the Backend

Navigate to the backend directory:

```bash
cd 04-products-with-ui
```

Create and activate a virtual environment:

**macOS / Linux:**

```bash
python3 -m venv venv
source venv/bin/activate
```

**Windows:**

```bash
python -m venv venv
venv\Scripts\activate
```

Install the dependencies:

```bash
pip install -r requirements.txt
```

### 3. Configure Environment Variables

Configure the following environment variables for your database connection:

```env
DB_NAME=your_database_name
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_USER=your_database_username
DB_PASSWORD=your_database_password

FRONTEND_URL=http://localhost:3000
```

Replace the placeholder values with your actual database credentials. Never commit database credentials or sensitive environment variables to GitHub.

### 4. Run the Backend

```bash
uvicorn main:app --reload
```

The backend will be available at:

- API: http://localhost:8000
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

### 5. Run the Frontend

Navigate to your React frontend directory and install dependencies:

```bash
npm install
```

Configure the backend API URL in your frontend environment:

```env
REACT_APP_API_URL=http://localhost:8000
```

Start the React development server:

```bash
npm start
```

The frontend will be available at:

http://localhost:3000

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products/` | Retrieve all products |
| GET | `/products/{product_id}` | Retrieve a product by ID |
| POST | `/products/` | Create a new product |
| PUT | `/products/{product_id}` | Update an existing product |
| DELETE | `/products/{product_id}` | Delete a product by ID |

## 📦 Product Model

Each product contains the following attributes:

| Field | Data Type | Description |
|---|---|---|
| `id` | Integer | Unique product identifier |
| `name` | String | Product name |
| `description` | String | Product description |
| `price` | Float | Product price |
| `quantity` | Integer | Available stock quantity |

## 🌐 Deployment Architecture

OmniInventory uses separate hosting services for its application components:

- **Frontend:** Deployed on Vercel.
- **Backend:** Deployed on Render.
- **Database:** Hosted on Aiven PostgreSQL.

The React frontend communicates with the FastAPI backend through REST API requests, while SQLAlchemy manages database interactions.

## 📖 API Documentation

Explore and test the available API endpoints through the interactive Swagger documentation:

https://omniinventory-api.onrender.com/docs

## 👩‍💻 Author

**Navitha**

- GitHub: https://github.com/Navitha55

---

*OmniInventory – Smart Inventory. Simplified Management.*