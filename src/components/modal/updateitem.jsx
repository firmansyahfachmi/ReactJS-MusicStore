import React, {Fragment, Component} from 'react';
import {Modal, Button, Form, Col} from 'react-bootstrap'

// import '.'

class ModalLayer extends Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            data : {
                name: "",
                category: "",
                branch: "",
                qty: "",
                price: "",
                desc: "",
                url: ""

            }
        }
    }

    componentDidMount(){
        const temp = this.props.data;
        this.setState({ data: temp })
    }
    

    handleChange = ( event ) => {
        
        let formData = {...this.state.data}
        formData[event.target.name] = event.target.value
        this.setState({
            data : formData
        });
        console.log(this.state.data)
        
    };

    handleClose = () => this.setState({showModal: false});
    handleShow = () => this.setState({ showModal: true });

    render(){
        
        const temp = this.state.data;
        
        return (
            <Fragment>
                
                <Button className="butgroup" variant="secondary" onClick={this.handleShow}><i className="fa fa-pencil" title="Edit"></i></Button>

                <Modal size="lg" show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton style={{ border: "none" }}>
                        <Modal.Title>Update Data</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="p-5">
                        <Form ref="form" style={{fontWeight:500}}>
                            <Form.Group as={Form.Row}>
                                <Form.Label column sm={2}>
                                    Product Name
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control type="text" defaultValue={temp.name} name="name" onChange={this.handleChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Form.Row}>
                                <Form.Label column sm={2}>
                                    Category
                                </Form.Label>
                                <Col sm={6}>
                                    <Form.Control as="select" name="category" defaultValue={temp.category} onChange={this.handleChange}>
                                        <option>---</option>
                                        <option>Violin</option>
                                        <option>Guitar</option>
                                        <option>Bass</option>
                                        <option>Harp</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Form.Row}>
                                <Form.Label column sm={2}>
                                    Branch
                                </Form.Label>
                                <Col sm={6}>
                                    <Form.Control as="select" defaultValue={temp.branch} name="branch" onChange={this.handleChange}>
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
                                    <Form.Control type="number" name="qty" defaultValue={temp.qty} onChange={this.handleChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Form.Row}>
                                <Form.Label column sm={2}>
                                    Price
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="number" name="price" defaultValue={temp.price} onChange={this.handleChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Form.Row}>
                                <Form.Label column sm={2}>
                                    Description
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control as="textarea" name="desc" defaultValue={temp.desc} onChange={this.handleChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Form.Row}>
                                <Form.Label column sm={2}>
                                    Image URL
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="text" name="url" defaultValue={temp.url} onChange={this.handleChange}/>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer style={{ border: "none" }}>
                        <Button variant="light" style={{ color: "white", paddingLeft: 30, paddingRight: 30, backgroundColor: "#E28935" }} onClick={() => {
                            this.props.handle(this.state.data)
                            console.log("dikirim",this.state.data)
                            this.setState({showModal:false})
                        }
                        }
                            >Update</Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default ModalLayer;