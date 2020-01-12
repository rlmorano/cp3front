import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

function PromoOne() {
  return (
    <>
      <div className="section section-dark text-center">
        <br />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">GET 30% OFF YOUR FIRST INK</h2>
              <h6 className="description"><sub>*Term & Conditions Apply</sub></h6>
              <br />
              <Button
                className="btn-round"
                color="warning"
                href="/booking"
              >Book a Session</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PromoOne;
