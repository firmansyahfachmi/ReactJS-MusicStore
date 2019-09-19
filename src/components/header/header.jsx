import React, { Component, Fragment } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
  Row,
  Col
} from "react-bootstrap";
import jwt from "jsonwebtoken";

import Swal from "sweetalert2";

import { connect } from "react-redux";
import { register, login, logout } from "../../Publics/Redux/Action/user";
import { getCart } from "../../Publics/Redux/Action/cart";

import { withRouter } from "react-router-dom";
import Logo from "./logo.png";

import ModalSignup from "../modal/modalSignup";
import Cart from "../card/cart";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isLogin: false,
      level: localStorage.getItem("level")
    };
  }

  componentDidMount = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      jwt.verify(token, "myMusicStore", (err, decode) => {
        if (!err) {
          this.setState({ isLogin: true });
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          localStorage.removeItem("name");
          localStorage.removeItem("email");
          localStorage.removeItem("level");
        }
      });
    }

    await this.props.dispatch(getCart(localStorage.getItem("userId")));
  };

  loginShow = () => {
    let x = document.getElementById("login");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("over2").style.display = "none";
    } else {
      x.style.display = "block";
      document.getElementById("over2").style.display = "initial";
    }
  };

  loginClose = () => {
    let x = document.getElementById("login");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("over2").style.display = "none";
    }
  };

  openNav = () => {
    document.getElementById("Sidepanel").style.width = "300px";
    document.getElementById("over").style.display = "initial";
  };

  closeNav = () => {
    document.getElementById("Sidepanel").style.width = "0";
    document.getElementById("over").style.display = "none";
  };

  handleChange = async e => {
    await this.setState({
      search: e.target.value
    });
  };

  handleForm = event => {
    let formData = { ...this.state.login };
    formData[event.target.name] = event.target.value;
    this.setState({
      login: formData
    });
  };

  redirect = () => {
    let searche = this.state.search;

    return this.props.history.push(`/item/search?keyword=${searche}`);
  };

  signUp = result => {
    this.props.dispatch(register(result));
  };

  total = () => {
    let count = 0;
    this.props.cart.map(cart => (count += cart.quantity * cart.price));
    return count;
  };

  render() {
    const { isLogin } = this.state;
    return (
      <Fragment>
        {/* NAVBAR */}
        <Navbar className="shadow-sm header">
          <Navbar.Brand href="/" style={{ padding: 0, margin: 0 }}>
            <img
              src={Logo}
              alt="logo"
              style={{
                width: "150px"
              }}
            />
            <span style={{ fontSize: 22, fontWeight: 600 }}>ANEKA MUSIK</span>
          </Navbar.Brand>
          <Form inline className="ml-1 mr-auto col-lg-7">
            <InputGroup className="col-lg-12">
              <FormControl
                type="text"
                placeholder="Search.."
                className="border-0"
                onChange={this.handleChange}
                onKeyPress={e => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    this.redirect();
                  }
                }}
              />
              <InputGroup.Append>
                <Button
                  variant="light"
                  style={{ zIndex: 0 }}
                  onClick={e => {
                    this.redirect();
                  }}
                >
                  <i className="fa fa-search"></i>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
          <Nav className="col-md-3" style={{ fontSize: 22 }}>
            {Number(localStorage.getItem("level")) === 2 ? (
              <>
                <Nav.Link
                  onClick={this.openNav}
                  onMouseOver={this.loginClose}
                  className=""
                >
                  <i className="fa fa-shopping-cart"></i>
                  <span style={{ fontSize: 18 }}>&nbsp;&nbsp;</span>
                </Nav.Link>

                <Nav.Link
                  onMouseOver={this.loginClose}
                  className="ml-2"
                  href={`/wishlist/${localStorage.getItem("userId")}`}
                >
                  <i className="fa fa-heart"></i>
                </Nav.Link>
              </>
            ) : (
              ""
            )}
            {isLogin ? (
              <Button
                onClick={this.loginShow}
                className="ml-3 m-1"
                variant="outer-light"
              >
                <span style={{ fontSize: 20, color: "rgb(122,105,57)" }}>
                  <i className="fa fa-user"></i>&nbsp;&nbsp;
                  {localStorage.getItem("name")}
                </span>
              </Button>
            ) : (
              <Button
                onClick={this.loginShow}
                className="ml-5  m-1"
                variant="outline-dark"
              >
                <span style={{ fontSize: 18 }}>Login</span>
              </Button>
            )}
          </Nav>
        </Navbar>
        {/* NAVBAR END */}

        {/* CART */}
        <div id="Sidepanel" className="sidepanel">
          <div style={{ display: "flex" }} className="topSide">
            <div>
              <i className="fa fa-shopping-cart"></i>&nbsp;&nbsp;KERANJANG
            </div>
            <Nav.Link href="" className="closebtn" onClick={this.closeNav}>
              x
            </Nav.Link>
          </div>

          <Row className="ml-3 mr-3 mb-2 mt-2">
            {this.props.cart.length > 0 ? (
              <Col>
                <Cart data={this.props.cart} />
              </Col>
            ) : (
              <Col className="border-bottom a">KERANJANG KOSONG</Col>
            )}
          </Row>

          <Row className="total">
            <Col>
              <Row style={{ marginBottom: 10 }}>
                <Col style={{ border: "1px solid black", padding: 6 }}>
                  Total
                  <span style={{ float: "right" }}>Rp. {this.total()}</span>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: 0 }}>
                  {this.props.cart.length > 0 ? (
                    <Button
                      block
                      variant="light"
                      style={{ backgroundColor: "#E28935", color: "white" }}
                      onClick={() =>
                        (window.location = `/checkout/${localStorage.getItem(
                          "userId"
                        )}`)
                      }
                    >
                      BAYAR
                    </Button>
                  ) : (
                    <a href="/" style={{ textDecoration: "none" }}>
                      <Button
                        block
                        variant="light"
                        style={{ backgroundColor: "#E28935", color: "white" }}
                      >
                        BELANJA SEKARANG
                      </Button>
                    </a>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* CART END */}

        {/* LOGIN */}
        {/* LOGIN FORM */}
        {!isLogin ? (
          <div id="login" className="border" onMouseLeave={this.loginClose}>
            <Row>
              <Col style={{ paddingBottom: 20 }}>
                <div style={{ fontWeight: 600 }}>
                  <i className="fa fa-user" style={{ fontSize: 28 }}></i>
                  <span style={{ marginLeft: 15, fontSize: 24 }}>
                    Masuk Ke Akun
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col style={{ paddingBottom: 17 }}>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleForm}
                />
              </Col>
            </Row>
            <Row style={{ paddingBottom: 17 }}>
              <Col>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleForm}
                />
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10 }}>
              <Col>
                <Button
                  block
                  style={{ color: "white" }}
                  onClick={e => {
                    e.preventDefault();
                    this.props
                      .dispatch(login(this.state.login))
                      .then(() => {
                        localStorage.setItem("token", this.props.user.token);
                        localStorage.setItem("userId", this.props.user.id);
                        localStorage.setItem("name", this.props.user.name);
                        localStorage.setItem("email", this.props.user.email);
                        localStorage.setItem("level", this.props.user.level);
                        Swal.fire({
                          type: "success",
                          title: "Login Berhasil",
                          showConfirmButton: false,
                          timer: 1500
                        }).then(() => {
                          window.location.reload();
                        });
                      })
                      .catch(err => {
                        alert(err);
                      });
                  }}
                >
                  MASUK
                </Button>
              </Col>
            </Row>
            <Row style={{ textAlign: "right", paddingBottom: 15 }}>
              <Col>
                <Nav.Link
                  className="linkNav"
                  style={{ fontWeight: 500, color: "black" }}
                >
                  Lupa Password?
                </Nav.Link>
              </Col>
            </Row>
            <Row
              style={{
                backgroundColor: "whitesmoke",
                marginLeft: -20,
                marginRight: -20,
                textAlign: "center",
                padding: 10,
                fontSize: 15
              }}
            >
              <Col>
                Belum punya akun?
                <ModalSignup
                  handleClick={this.loginClose}
                  handleSignup={this.signUp}
                />
              </Col>
            </Row>
          </div>
        ) : (
          /* LOGIN FORM END*/

          /* LOGINED DIV */
          <div id="login" className="border" onMouseLeave={this.loginClose}>
            <Row>
              <Col
                style={{
                  paddingBottom: 20,
                  justifyContent: "center",
                  display: "flex"
                }}
              >
                <div
                  style={{
                    fontWeight: 600,
                    textAlign: "center",
                    border: "1px solid silver",
                    borderRadius: 100,
                    padding: 30,
                    width: 110
                  }}
                >
                  <i className="fa fa-user" style={{ fontSize: 48 }}></i>
                </div>
              </Col>
            </Row>
            <Row>
              <Col style={{ paddingBottom: 5, fontSize: 20 }}>
                <strong>{localStorage.getItem("name")}</strong>&nbsp;&nbsp;
                <span style={{ fontSize: 18 }}>
                  {Number(localStorage.getItem("level")) === 1
                    ? "(Admin)"
                    : "(User)"}
                </span>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 5 }}>
              <Col>{localStorage.getItem("email")}</Col>
            </Row>
            <Row style={{ paddingBottom: 20 }}>
              <Col>
                <hr />
                <i className="fa fa-history" style={{ color: "grey" }}></i>
                &nbsp;&nbsp;
                {Number(localStorage.getItem("level")) === 2 ? (
                  <a href={`/transaction/${localStorage.getItem("userId")}`}>
                    Riwayat Transaksi
                  </a>
                ) : (
                  <a href={`/transaction/all`}>Data Riwayat Transaksi</a>
                )}
              </Col>
            </Row>
            <Row style={{ textAlign: "right", paddingBottom: 15 }}>
              <Col>
                <Button
                  variant="outline-danger"
                  onClick={e => {
                    e.preventDefault();
                    this.props.dispatch(logout());
                    localStorage.removeItem("token");
                    localStorage.removeItem("userId");
                    localStorage.removeItem("name");
                    localStorage.removeItem("email");
                    localStorage.removeItem("level");
                    window.location = "/";
                  }}
                >
                  Logout
                </Button>
              </Col>
            </Row>
          </div>
        )}
        {/* LOGINED DIV END */}
        {/* LOGIN END */}

        {/* OVERLAY */}
        <div id="over" onClick={this.closeNav} className="overlay"></div>
        <div id="over2" className="overlay2"></div>
        {/* OVERLAY END */}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.currentUser,
    cart: state.cart.cartData
  };
};

export default connect(mapStateToProps)(withRouter(Header));
