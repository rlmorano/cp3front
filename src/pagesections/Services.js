import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

function Services() {
  return (
    <>
      <div className="section text-center" id="services">
        <Container>
          <Row>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-album-2" />
                </div>
                <div className="description">
                  <h4 className="info-title">Modern Tattoo</h4>
                  <p className="description">
                    Black, grey – we match the style, design, and ink to your personality.</p>
                  <Button className="btn-round" color="warning" href="#pablo">BOOK A SESSION</Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-bulb-63" />
                </div>
                <div className="description">
                  <h4 className="info-title">Old School Tattoo</h4>
                  <p>Bold, black lines and traditional designs. You name it, we’ll ink it.</p>
                  <Button className="btn-round" color="warning" href="/">BOOK A SESSION</Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-chart-bar-32" />
                </div>
                <div className="description">
                  <h4 className="info-title">Tribal Tattoo</h4>
                  <p>The best #SkinBling worn on your sleeve and have character.</p>
                  <Button className="btn-round" color="warning" href="/">BOOK A SESSION</Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-sun-fog-29" />
                </div>
                <div className="description">
                  <h4 className="info-title">Piercing</h4>
                  <p>Complement your ink with some bling to parts of your body.</p>
                  <Button className="btn-round" color="warning" href="/">BOOK A SESSION</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Services;
