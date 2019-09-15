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
  //   ButtonGroup
} from "react-bootstrap";

import { withRouter } from "react-router-dom";
import Logo from "./logo.png";

import ModalSignup from "../modal/modalSignup";
import "./header.css";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

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

  redirect = () => {
    let searche = this.state.search;

    return this.props.history.push(`/item/search?keyword=${searche} `);
  };

  signUp = result => {};

  render() {
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
          <Form inline className="ml-auto mr-auto col-lg-7">
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
          <Nav className="col-md-2" style={{ fontSize: 20 }}>
            <Nav.Link onClick={this.loginShow} className="ml-1">
              <i className="fa fa-user"></i>
              <span style={{ fontSize: 18 }}>&nbsp;&nbsp;Login</span>
            </Nav.Link>
            <Nav.Link
              onClick={this.openNav}
              onMouseOver={this.loginClose}
              className="ml-4"
            >
              <i className="fa fa-shopping-cart"></i>
              <span style={{ fontSize: 18 }}>&nbsp;&nbsp;Cart</span>
            </Nav.Link>
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
          <Row className="ml-3 mr-3 mb-2">
            <Col className="border-bottom a">KERANJANG KOSONG</Col>
          </Row>
          <Row className="total">
            <Col>
              <Row style={{ marginBottom: 10 }}>
                <Col style={{ border: "1px solid black", padding: 6 }}>
                  Total
                  <span style={{ float: "right" }}>Rp.</span>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: 0 }}>
                  <a href="/" style={{ textDecoration: "none" }}>
                    <Button
                      block
                      variant="light"
                      style={{ backgroundColor: "#E28935", color: "white" }}
                    >
                      BELANJA SEKARANG
                    </Button>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* CART END */}

        {/* LOGIN */}
        <div id="login" className="border" onMouseLeave={this.loginClose}>
          {/* LOGIN FORM */}
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
              <Form.Control type="text" placeholder="Email" />
            </Col>
          </Row>
          <Row style={{ paddingBottom: 17 }}>
            <Col>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Row>
          <Row style={{ paddingBottom: 10 }}>
            <Col>
              <Button block style={{ color: "white" }}>
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
          {/* LOGIN FORM END*/}

          {/* LOGINED DIV */}
          {/* <Row>
            <Col style={{ paddingBottom: 20 }}>
              <div style={{ fontWeight: 600, textAlign: "center" }}>
                <i className="fa fa-user" style={{ fontSize: 48 }}></i>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{ paddingBottom: 12, fontSize: 20 }}>
              <strong>Name</strong>
            </Col>
          </Row>
          <Row style={{ paddingBottom: 12 }}>
            <Col>Email</Col>
          </Row>
          <Row style={{ paddingBottom: 10 }}>
            <Col>
              <a href="/wishlist">My Wishlist</a>
              <hr />
            </Col>
          </Row>
          <Row style={{ textAlign: "right", paddingBottom: 15 }}>
            <Col>
              <Button variant="outline-danger">Logout</Button>
            </Col>
          </Row> */}
          {/* LOGINED DIV END */}
        </div>
        {/* LOGIN END */}

        {/* OVERLAY */}
        <div id="over" onClick={this.closeNav} className="overlay"></div>
        <div id="over2" className="overlay2"></div>
        {/* OVERLAY END */}
      </Fragment>
    );
  }
}

export default withRouter(Header);
