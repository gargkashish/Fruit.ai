import React from "react";

import Helmet from "../components/Helmet/Helmet";
import "../Styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import CommonSection from "../Components/Ui/CommonSection";
import { cartActions } from "../Redux/Slices/CartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        {/* ------------Product Cart page---------- */}
        <Container>
          <Row>
            <Col lg="12">
              {/* Product length checking  */}
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*  mapping product by condition */}
                    {cartItems.map((item) => (
                      // table and row section
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Subtotal:
                  <span className="cart__subtotal"> ${totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn btn btn-danger me-2">
                    <Link to="/all-foods">Continue Shopping</Link>
                  </button>
                  <button className="addTOCart__btn btn btn-outline-danger">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  // destructuring item from props.item
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  // Delete item from the cart
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
    toast.success("Delete item successfully");
  };

  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}px</td>
      <td className="text-center cart__item-del">
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
