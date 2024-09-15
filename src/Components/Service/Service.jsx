import React from "react";
import { Col, Container, Row } from "reactstrap";

import featureImg01 from "../../assets/images/service-01.png";
import featureImg02 from "../../assets/images/service-02.png";
import featureImg03 from "../../assets/images/service-03.png";
import Category from "../Ui/Category";
import "../../Styles/service.css";
import { motion } from "framer-motion";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    Desc: "Quick DeliveryIf you are looking for great products and great service, look no further than Oberto Beef Jerky. These jerky sticks are quickly delivered, so if you are in a hurry, do not worry. The Oberto Beef Jerky",
  },
  {
    title: "Super Service",
    imgUrl: featureImg02,
    Desc: "Service with a Smile. Encouragement.Knowledge. Acceptance. It has become part of me and I hate it. I always have this unshakeable feeling that I'm disappointing you. I think I see it in your eyes.",
  },
  {
    title: "Easy Pick up",
    imgUrl: featureImg03,
    Desc: "Local pickup is an added bonus. Like the AmazonBasics keyboard, I was able to order the Aeron Wireless Bluetooth Mouse today, to be delivered to my house by Saturday. It's not the same as having it.",
  },
];

const Service = () => {
  return (
    <>
      {/* -----------Service Section ----------- */}
      <section id="service">
        <Container className="mt-3">
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="text-danger mb-4">What we serve</h5>
              <h2>Just sit back at home</h2>
              <h2>
                We will <span className="text-danger">Take Care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                We need vitamin C to support the immune system, promote radiant
                skin and help blemishes heal.
              </p>
              <p className="feature__text">
                The best sources are blackcurrants, blueberries, broccoli,
                guava, kiwi fruits, oranges, papaya, strawberries and sweet
                potatoes.
              </p>
            </Col>

            {/* ------------Mapping Product data ------------- */}
            {featureData.map((item, index) => (
              <Col lg="4" md="6" key={index} className="my-5">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#fde4e4",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  className="feature__item mt-3 text-center"
                >
                  <img className="w-25 mb-3" src={item.imgUrl} alt="" />
                  <h5>{item.title}</h5>
                  <p>{item.Desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Service;
