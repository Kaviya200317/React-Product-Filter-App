import React from "react";
import "../App.css";

const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.length === 0 ? (
        <li className="no-product">No products found.</li>
      ) : (
        products.map((product) => (
          <li key={product.id} className="product-item">
            <span>{product.name}</span>
            <small>{product.category}</small>
          </li>
        ))
      )}
    </ul>
  );
};

export default ProductList;
