import React, { useContext } from "react";
import "./style/Navbar.css";
import CartContext from "./context/cart/CartContext";

const Navbar = () => {
  const { cartItems, showHideCart } = useContext(CartContext);
  return (
    <nav>
      <div className="nav_left">Store</div>
      <div className="nav_middle">
        <div className="input_wrapper">
          <input type="text" />
          <i className="fas fa-search" />
        </div>
      </div>
      <div className="nav_right">
        <div className="cart_icon">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className="item_count">
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
