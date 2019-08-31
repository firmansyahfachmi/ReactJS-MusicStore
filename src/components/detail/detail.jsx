import React ,{Component, Fragment} from 'react'
import {Button, Col, Row, Form, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import ModalLayer from '../modal/updateitem.jsx';

// import Datane from "../../data.js";

import {getProducts} from '../../Publics/Redux/Action/musicstore.js'

import './detail.css'

class Detail extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            dataFiltered: []
        }
    }

    componentDidMount = async () => {
        await this.props.dispatch(getProducts())
        
        this.setState({
            data:this.props.data.data
        })

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
            dataFiltered: result
            
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
                            <h3 className="title">{data.name} </h3>
                            <div style={{float:"right"}}>
                                    <ModalLayer data={data} handle={this.updateData}/>
                                <Link to={`/item/${data.category_name}`}>
                                    <Button variant="danger" title="Delete" onClick={() => 
                                    { if(window.confirm("Are you sure want to delete this data ?"))
                                        {
                                            this.remove(data.id)
                                        }
                                    }
                                       }><i className="fa fa-trash" ></i></Button>
                                </Link>
                            </div>
                        </div>
                        <div className="detailBody">
                            <p>{data.description}</p>
                        </div>
                        <div className="detailFoot">
                            <Row style={{ margin: 5 }} >
                                <Col style={{ margin: "auto", padding: "auto", fontWeight: 500 }} >Status</Col>
                                <Col className="col-lg-8"><h4>{(data.quantity > 0 ?
                                    <Badge variant="success">Available</Badge> : <Badge variant="danger">Not Available</Badge>
                                )}</h4></Col>
                            </Row>
                            <Row style={{margin:5}} >
                                <Col style={{ margin: "auto", padding: "auto", fontWeight:500 }} >Branch</Col>
                                <Col className="col-lg-8"><Form.Control value={data.branch_name} disabled/></Col>
                            </Row>
                            <Row style={{ margin: 5 }}>
                                <Col style={{ margin: "auto", padding: "auto", fontWeight: 500  }}>Quantity</Col>
                                   <Col className="col-lg-8"><Form.Control value={data.quantity} disabled/></Col>
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

const mapStateToProps = state => {
    return{
        data:state.musicStore.detailData
    }
}

export default connect (mapStateToProps) (Detail);