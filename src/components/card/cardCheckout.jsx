import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
// import { deleteCart } from "../../Publics/Redux/Action/cart";

import "./card.css";

const CardCheckout = props => {
  return (
    <Fragment>
      <Row>
        <Col>
          <div className="cardCheckout">
            {props.data.map(cart => (
              <Row className="cardRow">
                <Col className="col-lg-2 p-0" style={{ textAlign: "center" }}>
                  <img
                    src={cart.url}
                    alt="#"
                    style={{ width: "auto", height: 130 }}
                  />
                </Col>
                <Col>
                  <Row>
                    <Col style={{ fontSize: 19 }}>
                      <b>{cart.name}</b>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ fontSize: 17 }}>Rp. {cart.price}</Col>
                  </Row>
                  <Row>
                    <Col>Jumlah: {cart.quantity}</Col>
                  </Row>
                </Col>
              </Row>
            ))}
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default connect()(CardCheckout);
