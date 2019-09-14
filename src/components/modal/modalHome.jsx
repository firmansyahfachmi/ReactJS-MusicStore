import React, { Fragment, Component } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

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
          variant="light"
          style={{
            color: "white",
            paddingLeft: 30,
            paddingRight: 30,
            backgroundColor: "#E28935"
          }}
          onClick={this.handleShow}
        >
          Add
        </Button>

        <Modal
          size="lg"
          show={this.state.showModal}
          style={{ marginTop: 60 }}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton style={{ border: "none" }}>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>

          <Modal.Body className="p-5">
            <Form ref="form" style={{ fontWeight: 500 }}>
              <Form.Group as={Form.Row}>
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="category"
                    onChange={this.handleChange}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Form.Row}>
                <Form.Label column sm={2}>
                  Image URL
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="url"
                    onChange={this.handleChange}
                    required
                  />
                </Col>
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
                this.props.handle(this.state.data);
                this.setState({ showModal: false, data: {} });
              }}
            >
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default ModalLayer;
