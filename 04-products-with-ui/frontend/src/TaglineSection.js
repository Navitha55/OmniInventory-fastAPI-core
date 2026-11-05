
import React from "react";
import "./TaglineSection.css";

const TaglineSection = () => {
  return (
    <div className="tagline-card">
      <div className="tagline-content">
        <h3>📦 Smart Inventory. Simplified Management.</h3>

        <p>
          Take control of your products, monitor stock levels,
          and manage your inventory efficiently with OmniInventory.
        </p>

        <div className="company-badge">
          <span className="powered-by">YOUR INVENTORY, YOUR CONTROL</span>
          <span className="company-name">OmniInventory</span>
        </div>
      </div>
    </div>
  );
};

export default TaglineSection;
