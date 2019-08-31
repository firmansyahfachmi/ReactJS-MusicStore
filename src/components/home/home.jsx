import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'

import ModalLayer from '../modal/modalHome.jsx'
import CardHome from "../card/cardHome.jsx";
import Search from "../search-bar/search.jsx";

import {getCategory, addCategory} from '../../Publics/Redux/Action/musicstore.js'

import './home.css';

class Home extends Component{
    state = {
        data : [], 
        search: ''
    }
    
    componentDidMount = async () => {
        await this.props.dispatch(getCategory())
        this.setState({
            data: this.props.data.data
        })
    } 


    addData = (result) =>{
        console.log(result)
        if (Object.keys(result).length > 0){

            this.props.dispatch(addCategory(result))
        }else{
            alert("Data harus di isi !!")
            window.location.reload()
        }
    }

    
    


    render(){
        const {data} = this.state;
        
    
        // const filtered = data.filter(data =>
        //     data.category_name.toLowerCase().includes(search.toLowerCase())
        // )

        return (
            <Fragment>
                <div className="search">
                    <div className="col-lg-12" style={{ backgroundColor: "red" }}>

                        <div className="input-group col-lg-11 shadow p-0 mb-1 bg-white rounded" style={{ float: "left" }}>
                            <div className="input-group-prepend" >
                                <div className="input-group-text bg-white" style={{ border: 0 }}><i className="fa fa-search"></i></div>
                            </div>

                            <Search handleChange={e => this.setState({search:e.target.value})} />
                        </div>
                        <button className="btn btn-light shadow" style={{ float: "right", position: "absolute", right: 55 }}><i className="fa fa-gear"></i></button>

                    </div>
                </div>
                <div className="home">
                    <ModalLayer handle={this.addData}/>

                    {(data.length > 0) ? <CardHome key={data.id} data={data} /> : <h1 style={{ marginTop: 20, textAlign:"center" }} className="alert alert-danger">No Data</h1> }
                    
                    
                </div>
            </Fragment>
        )
   

}

   
}

const mapStateToProps = state => {
    return{
        data:state.musicStore.categoryData
    }
}

export default connect (mapStateToProps) (Home);
