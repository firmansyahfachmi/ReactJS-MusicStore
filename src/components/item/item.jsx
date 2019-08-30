import React, { Component, Fragment} from 'react';
 

import ModalLayer from '../modal/modalitem.jsx'
import CardItem from "../card/carditem.jsx";
import Search from "../search-bar/search.jsx";

import Datane from "../../data.js";


import './item.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            search:''
            
        }
        
    }

    componentDidMount(){
        this.setState({data:Datane})
    }


    addData = (result) => {
        if (Object.keys(result).length > 0) {
            this.state.data.push(result);

            this.setState({ data: this.state.data })
        } else {
            alert("Data harus di isi !!")
            window.location.reload()
        }
    }


    render() {
        let filtered ='';
        const { data, search } = this.state;

        if(this.props.match.params.category){
            if(this.props.match.params.category === 'all'){
                const searched= data.filter(data =>
                    data.name.toLowerCase().includes(search.toLowerCase())

                )
                filtered = searched;
            } else{
                filtered = data.filter(data =>
                    data.category.toLowerCase().includes(this.props.match.params.category.toLowerCase())
                )
            }
        }

        // filtered = data.filter(data =>
        //     data.name.toLowerCase().includes(search.toLowerCase())
        // )
        

        
        return (
            <Fragment>
            <div className="search">
                <div className="col-lg-12" style={{ backgroundColor: "red" }}>

                    <div className="input-group col-lg-11 shadow p-0 mb-1 bg-white rounded" style={{ float: "left"}}>
                        <div className="input-group-prepend" >
                                <div className="input-group-text bg-white" style={{ border: 0 }}><i className="fa fa-search"></i></div>
                        </div>

                        <Search handleChange={e => this.setState({ search: e.target.value })} />
                    </div>
                    <button className="btn btn-light shadow" style={{ float: "right", position: "absolute", right: 55 }}><i className="fa fa-gear"></i></button>

                </div>
            </div>
            <div className="item">
                <ModalLayer handle={this.addData}/>

                {
                        (filtered.length > 0) ? <CardItem key={this.state.data.id} data={filtered} /> : <h1 style={{ marginTop: 20, textAlign: "center" }} className="alert alert-danger">No Data</h1>
                }
        </div>
        </Fragment>
        )
    }


}

export default Item;
