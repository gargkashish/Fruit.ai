import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../../../public/fav-icon.png";
import "../../Styles/Footer.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    // ============Footer Section==============
    <footer className="footer">
      <Container>
        <Row>
          {/* -------------- First Column -------------- */}
          <Col lg="3" md="4" sm="6">
            <div className="logo text-start  footer__logo ">
              <div className="footer__logo d-flex align-items-center justify-content-start gap-1">
                <img src={logo} alt="" />
                <h5>Foodsify</h5>
              </div>
              <p className="mt-3">
                The best food delivery services let you order whatever you want
                to eat with just the click of a button. Burgers, pizza, sushi, a
                dish from your favorite local restaurant
              </p>
            </div>
          </Col>

          {/* ---------------Second Column -------------- */}

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup>
              <ListGroupItem className="delivery__time-item border-0 p-0">
                <span>Sunday - Thursday</span>
                <p>10:00 - 11:00 PM</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 p-0">
                <span>Friday - Saturday</span>
                <p>Off Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          {/* ---------------Third Column -------------- */}

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact Us</h5>
            <ListGroup>
              <ListGroupItem className="delivery__time-item border-0 p-0">
                <span>Phone: 0146574681</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 p-0">
                <span>Mail: aburaihansarker567@gmail.com</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 p-0">
                <p>Address: Mymensingh, Dhaka, Bangladesh</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
                    {/* ---------------Fourth Column -------------- */}

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter d-flex  align-items-center gap-1">
              <input
                type="email"
                placeholder="Enter your mail"
                className="form-control "
              />
              <motion.button
                whileTap={{ scale: 1.3 }}
                className="btn btn-danger px-3"
              >
                <i class="ri-send-plane-fill"></i>
              </motion.button>
            </div>
          </Col>
        </Row>
        <hr className="mt-3" />

        {/* Copyright and self branding section */}
        
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright @{year}, Website made by Abu Raihan. All Right Reserved
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center justify-content-lg-end gap-4 ">
              <p className="m-0 text-center fw-bold">Follow Us</p>
              <span>
                <Link to="#">
                  <i class="ri-facebook-circle-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="#" target="_blank">
                  <i class="ri-linkedin-box-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-github-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-youtube-fill"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
