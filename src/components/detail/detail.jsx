import React ,{Component, Fragment} from 'react'
import {Button, Col, Row, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import ModalLayer from '../modal/updateitem.jsx';

import Datane from "../../data.js";

import './detail.css'

class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            dataFiltered: []
        }
    }

    componentDidMount = async () => {
        await this.setState({ data: Datane })

        const filtered = this.state.data.filter(data =>
            data.name.toLowerCase().includes(this.props.match.params.name.toLowerCase())
        )

        this.setState({ dataFiltered: filtered[0] })
    }

    remove = (i) => {
        let index = this.state.data.findIndex(data =>{
            return data.id === i;
        })
        this.state.data.splice(index, 1);
        this.setState({ data: this.state.data });
        
    }

    updateData = (result) => {
        this.setState({
            data: result
            
        })


    }

    

    render(){ 

        let data = this.state.dataFiltered;
        return(
            <Fragment>
               
                   
                <div className="detail" key={data.id}>
                    <div className="image col-md-3 shadow" >
                           <img src={data.url} alt={data.name} />
                    </div>
                    <div className="detailed col-md-9">
                        <div className="detailHead">
                            <h3 className="title">{data.name}</h3>
                            <div style={{float:"right"}}>
                                    <ModalLayer data={data} handle={this.updateData}/>
                                <Link to={`/item/${data.category}`}>
                                    <Button variant="danger" title="Delete" onClick={() => this.remove(data.id)}><i className="fa fa-trash" ></i></Button>
                                </Link>
                            </div>
                        </div>
                        <div className="detailBody">
                            <p>{data.desc}</p>
                        </div>
                        <div className="detailFoot">
                            <Row style={{margin:5}} >
                                <Col style={{ margin: "auto", padding: "auto", fontWeight:500 }} >Available</Col>
                                <Col className="col-lg-8"><Form.Control value={data.branch} disabled/></Col>
                            </Row>
                            <Row style={{ margin: 5 }}>
                                <Col style={{ margin: "auto", padding: "auto", fontWeight: 500  }}>Quantity</Col>
                                   <Col className="col-lg-8"><Form.Control value={data.qty} disabled/></Col>
                            </Row>
                            <Row style={{ margin: 5 }}>
                                <Col style={{ margin: "auto", padding: "auto", fontWeight: 500  }}>Price</Col>
                                <Col className="col-lg-8"><Form.Control value={"Rp. "+data.price} disabled/></Col>
                            </Row>
                            
                        </div>
                    </div>
                </div>
               
            </Fragment>  
        )
    }

}

export default Detail;