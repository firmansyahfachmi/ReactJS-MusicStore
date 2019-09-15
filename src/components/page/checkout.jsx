import React, { Component, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import "./page.css";
import CardC from "../card/cardCheckout";

class Checkout extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="checkout">
          <Row>
            <Col>
              <div className="topDiv">
                <h4 style={{ color: "#363636" }}>
                  <i
                    className="fa fa-shopping-cart"
                    style={{ fontSize: 22 }}
                  ></i>
                  &nbsp;&nbsp;Pesanan Anda
                </h4>
                <hr />
                <div>
                  <CardC />
                </div>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 500,
                    backgroundColor: "white",
                    borderTop: "1px solid silver",
                    marginLeft: -20,
                    marginRight: -20,
                    marginBottom: -20,
                    padding: 15
                  }}
                >
                  Total Rp. <span>-</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="bottomDiv">
                <h4 style={{ color: "#363636" }}>
                  <i className="fa fa-truck" style={{ fontSize: 22 }}></i>
                  &nbsp;&nbsp;Pengiriman
                </h4>
                <hr />
                <Form>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Nama Depan</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Nama Belakang</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form>
              </div>
            </Col>
            <Col>
              <div className="bottomDiv">
                <h4 style={{ color: "#363636" }}>
                  <i className="fa fa-dollar" style={{ fontSize: 22 }}></i>
                  &nbsp;&nbsp;Pembayaran
                </h4>
                <hr />
                <Form>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Kartu Kredit</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Tanggal Expirasi</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group className="col-lg-6 ml-0 pl-0">
                    <Form.Label>Verifikasi Nomor Kartu</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group>
                    <i
                      className="fa fa-cc-paypal"
                      style={{ fontSize: 24, color: "#0054c9" }}
                    ></i>
                    &nbsp;
                    <i
                      className="fa fa-cc-visa"
                      style={{ fontSize: 24, color: "#003c8f" }}
                    ></i>
                  </Form.Group>
                </Form>
              </div>
              <div className="container-fluid p-0 mt-3">
                <Button
                  block
                  variant="light"
                  style={{
                    fontSize: 18,
                    backgroundColor: "#E28935",
                    color: "white",
                    fontWeight: 500
                  }}
                >
                  CHECKOUT
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Checkout;
