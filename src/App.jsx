import React, { useState } from "react";
import { products } from "./data/products";
import Filter from "./Components/Filter";
import ProductList from "./Components/ProductList";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container">
      <h1 className="title">Product Filter App</h1>
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
