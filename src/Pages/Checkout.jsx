import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Col, Container, FormGroup, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../Components/Ui/CommonSection";
import "../Styles/Checkout.css";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [enterAddress, setEnterAddress] = useState("");
  const navigate = useNavigate();
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const fastDelivery = 10;

  const placeOrder = () => {
    console.log(`Clicked`);
    navigate("/order");
  };
  const shippingInfo = [];
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Clicked");
    // user Shipping data
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
      address: enterAddress,
    };

    // push the data into the shippingInfo
    shippingInfo.push(userShippingAddress);
    console.log(shipmentInfo);
  };
  return (
    <Helmet title="- Checkout">
      <CommonSection title="Checkout"></CommonSection>
      <Container>
        <section>
          {/* ----------Checkout Section--------- */}
          <Row>
            {/* Checkout left side */}
            <Col lg="8">
              <h6 className="fw-bold mb-3 fs-5">Billing Information</h6>
              <form onSubmit={handleSubmit}>
                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={enterName}
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter your email"
                    value={enterEmail}
                    onChange={(e) => setEnterEmail(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Your phone no"
                    required
                    value={enterNumber}
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Street Address"
                    required
                    value={enterAddress}
                    onChange={(e) => setEnterAddress(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your city"
                    required
                    value={enterCity}
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your postal code"
                    required
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your Country "
                    required
                    value={enterCountry}
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </FormGroup>
              </form>
            </Col>

            {/* Checkout Right side */}
            <Col lg="4" className="place__order mt-5">
              <div className="checkout__cart">
                <h6>
                  Total Quantity: <span>{totalQuantity} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  Fast Delivery: <span>${fastDelivery}</span>
                </h6>
                <h6>
                  Shipping (free): <span>$0</span>
                </h6>
                <h4>
                  Total Cost: <span>${totalAmount + fastDelivery}</span>
                </h4>
                <button
                  className=" border-0 py-2 rounded mt-3  fw-bold w-100"
                  type="submit"
                  onClick={placeOrder}
                >
                  Payment
                </button>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </Helmet>
  );
};

export default Checkout;
