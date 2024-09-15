import React from "react";
import { Container, Row } from "reactstrap";
import "../../Styles/CommonSection.css";

const CommonSection = (props) => {
  return (
    <section className="common__section">
      {/* -----------Common section----------- */}
      <Container>
        <h2>{props.title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
