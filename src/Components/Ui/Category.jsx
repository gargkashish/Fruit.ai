import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import '../../Styles/Category.css'

import categoryImg01 from "../../assets/images/category-01.png";
import categoryImg02 from "../../assets/images/category-02.png";
import categoryImg03 from "../../assets/images/category-03.png";
import categoryImg04 from "../../assets/images/category-04.png";

const categoryData = [
  {
    display: "Fresh Food",
    imgUrl: categoryImg01,
  },
  {
    display: "Dry Food",
    imgUrl: categoryImg02,
  },
  {
    display: "Asian Food",
    imgUrl: categoryImg03,
  },
  {
    display: "Citrus Food",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" key={index}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="category__item d-flex align-items-center gap-3 mt-3"
            >
              <div className="category__img">
                <img src={item.imgUrl} alt="" />
              </div>
              <h6>{item.display}</h6>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
