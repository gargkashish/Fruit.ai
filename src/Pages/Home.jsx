import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import heroImg from "../../public/delivery-boy-1.jpg";
// import heroImg from "../assets/images/hero.png";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import Category from "../Components/Ui/Category";
import { motion } from "framer-motion";
import Service from "../Components/Service/Service";

import products from "../assets/fake-data/products";

import productImg01 from "../assets/images/hamburger.png";
import productImg02 from "../assets/images/pizza.png";
import productImg03 from "../assets/images/bread.png";
import ProductCard from "../Components/ProductCard/ProductCard";

import networkImg from "../assets/images/network.png";
import About from "../Components/About/About";
import TestimonialSlider from "../Components/Ui/TestimonialSlider";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicedPizza = filteredPizza.slice(0, 4);
    setHotPizza(slicedPizza);
  }, []);

  // Product filter by category
  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filterProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filterProducts);
    }

    if (category === "PIZZA") {
      const filterProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filterProducts);
    }

    if (category === "BREAD") {
      const filterProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filterProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section className="height">
        {/* ------------Home section-------------- */}
        <Container>
          <Row className="d-flex align-items-center justify-content-between">
            {/* Hero Content section */}
            <Col lg="6" md="6" sm="12">
              <div className="hero__content">
                <h2 className="hero__title mb-3">Most Fastest Food</h2>
                <h1 className="mb-3">
                  <span className="text-danger fw-bold">Delivery </span>
                  Service
                </h1>
                <p>
                  Enter Your location to get your nearest restaurant or get
                  deliver foods & enjoy. <br /> Happy foodie life.
                </p>

                {/* buttons */}
                <div className="btns d-flex align-items-center gap-4">
                  <button className="btn hover:bg-dark order__btn d-flex fw-bold align-items-center justify-content-between bg-danger text-white">
                    Order Now <i className="ri-arrow-right-s-line"></i>{" "}
                  </button>
                  <motion.button
                    whileTap={{ scale: 1.3 }}
                    className="all__fruits-btn btn btn-outline-danger fw-bold"
                  >
                    <Link to="/all-fruits">See All Fruits</Link>
                  </motion.button>
                </div>

                <div className="facilities d-flex align-items-center gap-5 mt-3">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No Shopping charge
                  </p>
                  <p className="d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    No 100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            {/* Hero Image section */}
            <Col lg="6" md="6" sm="12">
              <div className="hero__image">
                <img className="w-100" src={heroImg} alt="hero-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Category Section  */}
      <section className="pt-0">
        <Category />
      </section>

      {/* service section */}
      <Service />

      {/* Popular Fruits section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Fruits</h2>
            </Col>

            <Col lg="12">
              <div className="food__category">
                <button
                  onClick={() => setCategory("ALL")}
                  className={`all__btn  ${
                    category === "ALL" ? "btnActive" : ""
                  }`}
                >
                  All
                </button>
                <button
                  className={`${category === "BURGER" ? "btnActive" : ""}`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={productImg01} alt="Product-image" />
                  Burger
                </button>
                <button
                  className={`${category === "PIZZA" ? "btnActive" : ""}`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={productImg02} alt="Product-image" />
                  Pizza
                </button>
                <button
                  className={`${category === "BREAD" ? "btnActive" : ""}`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={productImg03} alt="product-image" />
                  Bread
                </button>
              </div>
            </Col>

            {/* Product render */}
            {allProducts.map((item, index) => (
              <Col lg="3" md="4" key={index}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Section  */}
      <section>
        <About />
      </section>

      {/* Popular fruits */}
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center ">
              <h2>Hot Pizza</h2>
              <p className="mt-4 text-muted">
                Members of Strictly Couple 2016 and 2017 Jake Mason and Laurence{" "}
                <br />
                Fox An unrivaled ensemble cast of irresistible personalities,
                incendiary chemistry, dazzling dance routines, and a superb live
                band
              </p>
            </Col>

            {hotPizza.map((item, index) => (
              <Col lg="3" md="4" key={index}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonial */}
      <section>
        <Testimonial />
      </section>
    </Helmet>
  );
};

export default Home;
