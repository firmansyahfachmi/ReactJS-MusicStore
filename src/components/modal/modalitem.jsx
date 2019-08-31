import React, {Fragment, Component} from 'react';
import {Modal, Button, Form, Col} from 'react-bootstrap'

// import '.'

class ModalLayer extends Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            data : {
                
            }
        }
    }

    handleChange = ( event ) => {
        let formData = {...this.state.data}
        formData[event.target.name] = event.target.value
        this.setState({
            data : formData
        });
    };

    handleClose = () => this.setState({showModal: false});
    handleShow = () => this.setState({ showModal: true });

    render(){

        return (
            <Fragment>
                
                <Button variant="light" style={{ color: "white", paddingLeft: 30, paddingRight: 30, backgroundColor: "#E28935" }} onClick={this.handleShow}>Add</Button>

                <Modal size="lg" show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton style={{ border: "none" }}>
                        <Modal.Title>Add Data</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="p-5">
                        <Form ref="form" style={{ fontWeight: 500 }}>
                            <Form.Group as={Form.Row}>
                                <Form.Label column sm={2}>
                                    Product Name
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control type="text" name="name" onChange={this.handleChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Form.Row}>
                                <Form.Label column sm={2}>
                                    Category
                                </Form.Label>
                                <Col sm={6}>
                                    <Form.Control as="select" name="category" onChange={this.handleChange}>
                                        <option>---</option>
                                        <option></option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Form.Row}>
                                <Form.Label column sm={2}>
                                    Branch
                                </Form.Label>
                                <Col sm={6}>
                                    <Form.Control as="select" name="branch" onChange={this.handleChange}>
                                        <option>---</option>
                                        <option>Jakarta</option>
                                        <option>Malang</option>
                                        <option>Jogjakarta</option>
                                        <option>Surabaya</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Form.Row}>
                                <Form.Label column sm={2}>
                                    Quantity
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="number" name="qty" onChange={this.handleChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Form.Row}>
                                <Form.Label column sm={2}>
                                    Price
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="number" name="price" onChange={this.handleChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Form.Row}>
                                <Form.Label column sm={2}>
                                    Description
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control as="textarea" name="desc" onChange={this.handleChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Form.Row}>
                                <Form.Label column sm={2}>
                                    Image URL
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="text" name="url" onChange={this.handleChange}/>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer style={{ border: "none" }}>
                        <Button variant="light" style={{ color: "white", paddingLeft: 30, paddingRight: 30, backgroundColor: "#E28935" }} onClick={() => {
                            this.props.handle(this.state.data)
                            this.setState({showModal:false})
                        }
                        }
                            >Add</Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default ModalLayer;