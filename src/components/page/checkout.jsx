import React, { Component, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import Swal from "sweetalert2";

import { getCart } from "../../Publics/Redux/Action/cart";
import { connect } from "react-redux";

import { addTransaction } from "../../Publics/Redux/Action/transaction";

import "./page.css";
import CardC from "../card/cardCheckout";

class PrintCheckout extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    await this.props.dispatch(getCart(localStorage.getItem("userId")));
  };

  total = () => {
    let count = 0;
    this.props.cart.map(cart => (count += cart.quantity * cart.price));
    return count;
  };

  render() {
    return (
      <Fragment>
        <div className="checkout">
          <h3>ANEKA MUSIK</h3>
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
                  <CardC data={this.props.cart} />
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
                  Total Rp.
                  <span> {this.total()}</span>
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
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

class Checkout extends Component {
  addTransaction = () => {
    this.props.cart
      .map(cart => this.props.dispatch(addTransaction(cart)))
      .then(res => {
        Swal.fire({
          type: "success",
          title: "Checkout",
          position: "top-end",
          showConfirmButton: true
        });
      });
  };

  render() {
    return (
      <div>
        <PrintCheckout
          cart={this.props.cart}
          dispatch={this.props.dispatch}
          ref={el => (this.componentRef = el)}
        />
        <Button
          className=" col-lg-4 mb-5"
          style={{
            marginLeft: 58,
            // marginTop: -50,
            fontWeight: 500
          }}
          onClick={this.addTransaction}
        >
          CHECKOUT
        </Button>
        <ReactToPrint
          trigger={() => (
            <Button
              variant="light"
              className=" mb-5"
              style={{
                backgroundColor: "#E28935",
                color: "white",
                fontWeight: 500,
                marginLeft: 10
              }}
            >
              PRINT RECEIPT
            </Button>
          )}
          content={() => this.componentRef}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cartData
  };
};

export default connect(mapStateToProps)(Checkout);
