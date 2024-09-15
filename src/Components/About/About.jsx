import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import whyImg from "../../assets/images/location.png";

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg="12" className="text-center w-100 m-auto">
          <p className="fs-3">
            To know More about <span className="text-danger">Foodsify?</span>
          </p>
          
          <p className="text-muted">
            The About Us page of your website is an essential source of
            information for all who want to know more about your business. About{" "}
            <br />
            Us pages are where you showcase your history, what is unique about
            your work, your company's values, and who you serve.
          </p>
        </Col>

        <Col lg="6" md="12">
          <img className="w-100" src={whyImg} alt="why-foodsify" />
        </Col>

        <Col lg="6" md="12" className="mt-5">
          <div className="why__fruitsify">
            <h2 className="fruitsify__title text-danger">Why Foodsify?</h2>
            <p>
              I just can't get enough of food delivery app about us. I want to
              get a T-Shirt with food delivery app about us on it so I can show
              it off to everyone. I have gotten at least 50 times the value from
              food delivery app about us
            </p>

            <ListGroup>
              <ListGroupItem className="border-0 ps-0">
                <p className="fs-5  d-flex align-items-center gap-2">
                  {" "}
                  <i class="ri-checkbox-circle-line text-danger"></i> Fresh and
                  Authentic Fruits.
                </p>
                <p className="text-muted ">
                  We have no regrets! Fresh and authentic fruits is both
                  attractive and highly adaptable. Fresh and Authentic Fruits
                  saved my business. I love your system
                </p>
              </ListGroupItem>

              <ListGroupItem className="border-0 ps-0">
                <p className="fs-5 d-flex align-items-center gap-2">
                  {" "}
                  <i class="ri-checkbox-circle-line text-danger"></i> Quality
                  Support
                </p>
                <p className="pt-0 text-muted">
                  I would also like to say thank you to all your staff. Fresh
                  fruits is exactly what our business has been lacking. she
                  could really make use of fruits!.
                </p>
              </ListGroupItem>

              <ListGroupItem className="border-0 ps-0">
                <p className="fs-5 d-flex align-items-center gap-2">
                  {" "}
                  <i class="ri-checkbox-circle-line text-danger"></i> Super Fast
                  Delivery System.
                </p>
                <p className="text-muted">
                  Nice work on your super fast delivery. Super fast delivery was
                  worth a fortune to my company. We were treated like royalty.
                </p>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
