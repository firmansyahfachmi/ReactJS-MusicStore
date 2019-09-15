import React, { Fragment } from "react";
import { Row, Col, Button } from "react-bootstrap";

import "./card.css";

const CardCheckout = props => {
  return (
    <Fragment>
      <Row>
        <Col>
          <div className="cardCheckout">
            <Row className="cardRow">
              <Col className="col-lg-2 p-0">
                <img
                  src="https://previews.123rf.com/images/robuart/robuart1601/robuart160100363/51593901-store-icon-shop-icon-flat-design-shop-or-market-cartoon-shop-market-store-or-cafe-shop-store-isolate.jpg"
                  alt="#"
                  width="140px"
                  className="border"
                />
              </Col>
              <Col>
                <Row>
                  <Col style={{ fontSize: 19 }}>
                    <b>Name</b>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ fontSize: 17 }}>Rp. 20000000</Col>
                </Row>
                <Row>
                  <Col>Jumlah: 1</Col>
                </Row>
              </Col>
              <Col className="col-lg-1 p-0" style={{ textAlign: "right" }}>
                <Button variant="outline-danger">
                  <i className="fa fa-minus"></i>
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CardCheckout;
