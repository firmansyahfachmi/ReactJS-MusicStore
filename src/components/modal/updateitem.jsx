import React, { Fragment, Component } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

// import '.'

class ModalLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      data: {},
      dropdown: {}
    };
  }

  componentDidMount() {
    const tempo = this.props.dataUpdate.filter(data => {
      return data.id === this.props.data.id;
    });

    tempo.map(temp => {
      return this.setState({
        data: {
          name: temp.name,
          category: temp.id_category,
          branch: temp.id_branch,
          quantity: temp.quantity,
          price: temp.price,
          description: temp.description,
          url: temp.url
        },
        dropdown: this.props.data
      });
    });
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
    const temp = this.state.data;

    return (
      <Fragment>
        <Button
          className="butgroup"
          variant="secondary"
          onClick={this.handleShow}
        >
          <i className="fa fa-pencil" title="Edit"></i>
        </Button>

        <Modal size="lg" show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton style={{ border: "none" }}>
            <Modal.Title>Update Data</Modal.Title>
          </Modal.Header>

          <Modal.Body className="p-5">
            <Form ref="form" style={{ fontWeight: 500 }}>
              <Form.Group as={Form.Row}>
                <Form.Label column sm={2}>
                  Product Name
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    defaultValue={temp.name}
                    name="name"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Form.Row}>
                <Form.Label column sm={2}>
                  Category
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as="select"
                    name="category"
                    defaultValue={this.state.data.category}
                    onChange={this.handleChange}
                  >
                    <option>---</option>
                    {this.props.category.map(data => (
                      <option value={data.id}>{data.category_name}</option>
                    ))}
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Form.Row}>
                <Form.Label column sm={2}>
                  Branch
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as="select"
                    name="branch"
                    defaultValue={this.state.data.branch}
                    onChange={this.handleChange}
                  >
                    <option>---</option>
                    {this.props.branch.map(data => (
                      <option value={data.id}>{data.branch_name}</option>
                    ))}
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Form.Row}>
                <Form.Label column sm={2}>
                  Quantity
                </Form.Label>
                <Col sm={7}>
                  <Form.Control
                    type="number"
                    name="quantity"
                    defaultValue={temp.quantity}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Form.Row}>
                <Form.Label column sm={2}>
                  Price
                </Form.Label>
                <Col sm={7}>
                  <Form.Control
                    type="number"
                    name="price"
                    defaultValue={temp.price}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Form.Row}>
                <Form.Label column sm={2}>
                  Description
                </Form.Label>
                <Col sm={7}>
                  <Form.Control
                    as="textarea"
                    name="description"
                    defaultValue={temp.description}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Form.Row}>
                <Form.Label column sm={2}>
                  Image URL
                </Form.Label>
                <Col sm={7}>
                  <Form.Control
                    type="text"
                    name="url"
                    defaultValue={temp.url}
                    onChange={this.handleChange}
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
                this.setState({ showModal: false });
              }}
            >
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default ModalLayer;
