import React, { useContext } from "react";
import "./style/ProductCard.css";
import Rating from "./style/Rating";
import CartContext from "./context/cart/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="ProductCard_wrapper">
      <div>
        <img className="ProductCard_img" src={product.Image} alt="product" />
        <h4>{product.name}</h4>
        <div className="Product_Price">
          <h5>{`${product.price}`}</h5>
        </div>
      </div>
      <div className="ProductCard_Rating">
        <Rating value={product.rating} text={`${product.numReview}reviews`} />
      </div>
      <button className="ProductCard_button" onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
