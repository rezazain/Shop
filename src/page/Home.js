import "./style/Home.css";
import products from "../data";
import ProductCard from "../components/ProductCard";

import React from "react";

const Home = () => {
  return (
    <div className="products_wrapper">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
