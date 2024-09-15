import React from "react";
import { Col, Container, Row } from "reactstrap";
import Order from "../assets/images/order.jpg";
import Helmet from "../Components/Helmet/Helmet";

const PlaceOrder = () => {
  return (
    <Helmet title="Order">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="order__img">
                <img className="w-100" src={Order} alt="Order" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="order__content text-center">
                <h2 className="fs-4 mt-5">
                  Your order has been successfully
                  <span className="text-danger"> Confirmed</span>
                  <br />
                  Stay Connected with us.
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default PlaceOrder;
