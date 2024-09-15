import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import "../../Styles/Shopping-cart.css";
import { useDispatch, useSelector } from "react-redux";
import { CartUiAction } from "../../Redux/Slices/CartUiSlice";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.cartItem);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(CartUiAction.toggle());
  };

  return (
    <div className="cart__container">
      {/* -------------Sidebar Cart Section -------------- */}
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProduct.length === 0 ? (
            <h6 className="text-center">No Product Found</h6>
          ) : (
            cartProduct.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom">
          <h6 className="mx-3">
            Subtotal Amount: <span>${totalAmount}</span>
          </h6>
          <button className="btn btn-danger mx-3">
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
