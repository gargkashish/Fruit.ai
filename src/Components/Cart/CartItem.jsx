import { motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ListGroup, ListGroupItem } from "reactstrap";
import productImg from "../../assets/images/product_01.jpg";
import { cartActions } from "../../Redux/Slices/CartSlice";
import "../../Styles/Cart-item.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, image01, price, quantity, totalPrice } = item;

  // Increment item quantity
  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
        quantity,
        totalPrice,
      })
    );
    toast.success("Food item increased");
  };

  // Decrement Item quantity
  const decrementItem = () => {
    dispatch(cartActions.removeItem(id));
    toast.success("Food item decremented ");
  };

  // Delete Item from cart
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
    toast.success("Food Deleted Successfully");
  };

  return (
    // -------------Sidebar Cart Item --------------------
    <ListGroupItem className="border-0 ">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="Product Image" />

        <div className="cart__product-info d-flex align-items-center justify-content-between w-100">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 ">
              {quantity}x <span>{price}</span>{" "}
              <span className="cart__product-price">${totalPrice}</span>
            </p>

            <div className="d-flex justify-content-between rounded px-2 align-items-center gap-3 increase__decrease-btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i className="ri-add-line"></i>
              </span>

              <span>{quantity}</span>
              <span className="decrease__btn" onClick={decrementItem}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <motion.span
            onClick={deleteItem}
            whileTap={{ scale: 1.2 }}
            className="delete__btn"
          >
            <i className="ri-close-line"></i>
          </motion.span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
