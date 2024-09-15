import React from "react";
import { Col, Container, Row } from "reactstrap";
import TestimonialSlider from "../Ui/TestimonialSlider";
import networkImg from "../../assets/images/network.png";

const Testimonial = () => {
  return (
    <Container className="mt-5">
      {/*  -----Testimonial Section----  */}
      <Row>
        <Col lg="12" className="mb-3">
          <h3 className="text-danger fs-3 mb-4 text-center">Testimonial</h3>
        </Col>
        <Col lg="6" md="6">
          <h2 className="fs-2">
            What our <span className="text-danger">customers</span> are saying
          </h2>
          <p className="text-muted my-5">
            We've used testimonial for the last five years. Great job, I will
            definitely be ordering again! <br /> After using testimonial my
            business skyrocketed! I STRONGLY recommend testimonial to EVERYONE
            interested in running a successful online business!
          </p>

          {/* ------------Slider----------- */}
          <TestimonialSlider />
        </Col>

        {/* ------Image section------ */}
        <Col lg="6" md="6">
          <img className="w-100" src={networkImg} alt="netWork Image" />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
