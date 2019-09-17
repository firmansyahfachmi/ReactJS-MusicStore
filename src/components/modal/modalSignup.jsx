import React, { Fragment, Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

// import '.'

class ModalLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      data: {}
    };
  }

  handleChange = event => {
    let formData = { ...this.state.data };
    formData[event.target.name] = event.target.value;
    this.setState({
      data: formData
    });
  };

  handleClose = () => this.setState({ showModal: false });
  handleShow = () => this.setState({ showModal: true });

  render() {
    return (
      <Fragment>
        <Button
          className="mb-1"
          variant="link"
          onClick={() => {
            this.props.handleClick();
            this.handleShow();
          }}
          style={{ paddingLeft: 5 }}
        >
          <b>Daftar</b>
        </Button>

        <Modal
          size="md"
          show={this.state.showModal}
          style={{ marginTop: 60 }}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton style={{ border: "none" }}>
            <Modal.Title>Create Account</Modal.Title>
          </Modal.Header>

          <Modal.Body className="p-5">
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer style={{ border: "none" }}>
            <Button
              variant="light"
              style={{
                color: "white",
                paddingLeft: 30,
                paddingRight: 30,
                backgroundColor: "#E28935"
              }}
              onClick={() => {
                this.props.handleSignup(this.state.data);
                this.setState({ showModal: false, data: {} });
              }}
            >
              Sign Up
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default ModalLayer;
