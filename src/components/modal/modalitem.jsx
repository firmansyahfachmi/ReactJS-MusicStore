import React, {Fragment, Component} from 'react';
import {Modal, Button, Form, Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import { getCategory, getBranch } from '../../Publics/Redux/Action/musicstore.js'

// import '.'

class ModalLayer extends Component{
    constructor(props){
        super(props);

        this.state = {
            showModal: false,
            data : {
                
            },
            branch : [],
            category: []
        }
        
    }

    componentDidMount = async () => {
        //Memanggil data dari Category
        await this.props.dispatch(getCategory())
            .then(res => {
                this.setState({
                    category: this.props.categories
                })
            })

        // //Memanggil data dari Branch
        await this.props.dispatch(getBranch())
            .then(res => {
                this.setState({
                    branch: this.props.branches
                })
            })
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
                                        {this.state.category.map(data => (
                                            <option value={data.id}>{data.category_name}</option>
                                        ))
                                        }
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
                                        {
                                            this.state.branch.map(data => (
                                            <option value={data.id}>{data.branch_name}</option>
                                        ))
                                        }
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Form.Row}>
                                <Form.Label column sm={2}>
                                    Quantity
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="number" name="quantity" onChange={this.handleChange}/>
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
                                    <Form.Control as="textarea" name="description" onChange={this.handleChange}/>
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

const mapStateToProps = state => {
    return{
        categories: state.musicStore.categoryData,
        branches: state.musicStore.branchData
    }
}


export default connect (mapStateToProps) (ModalLayer);