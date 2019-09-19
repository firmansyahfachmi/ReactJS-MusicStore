import React, { Component, Fragment } from "react";
import { Row, Col, Button } from "react-bootstrap";

import { connect } from "react-redux";
import { deleteCart } from "../../Publics/Redux/Action/cart";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        {this.props.data.map(cart => (
          <Row className="mb-3 pb-3 border-bottom" key={cart.id}>
            <Col>
              <Row>
                <Col md={3} style={{ textAlign: "center" }}>
                  <img
                    src={cart.url}
                    alt={cart.name}
                    style={{
                      width: "auto",
                      height: 70,
                      marginLeft: -15,
                      fontSize: 10
                    }}
                  />
                </Col>

                <Col>
                  <Row style={{ marginBottom: 2 }}>
                    <Col>
                      <strong>{cart.name}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ fontSize: 14 }}>Rp. {cart.price}</Col>
                  </Row>
                  <Row>
                    <Col style={{ fontSize: 14 }}>Jumlah : {cart.quantity}</Col>
                  </Row>
                </Col>

                <Col md={1}>
                  <Button
                    className="p-0"
                    variant="link"
                    style={{ textDecoration: "none", color: "grey" }}
                    onClick={async () =>
                      this.props.dispatch(
                        deleteCart(localStorage.getItem("userId"), cart.id)
                      )
                    }
                  >
                    <i className="fa fa-minus"></i>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cartData
  };
};

export default connect(mapStateToProps)(Cart);
