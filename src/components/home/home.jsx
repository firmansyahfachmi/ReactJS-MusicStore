import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import { getCategory, postCategory } from '../../Publics/Redux/Action/musicstore.js'
import Swal from 'sweetalert2'

import ModalLayer from '../modal/modalHome.jsx'
import CardHome from "../card/cardHome.jsx";
import Search from "../search-bar/search.jsx";

import './home.css';

class Home extends Component{
    state = {
        data : [], 
        search: ''
    }
    
    componentDidMount = async () => {

        //Memanggil data dari category
        await this.props.dispatch(getCategory())
        this.setState({
            data: this.props.data
        })
    } 

    //Function tambah data category
    addData = (result) =>{

        //Validasi jika data yang di isi kosong 
        if (Object.keys(result).length > 0){
            
            this.props.dispatch(postCategory(result)) //Memanggil action tambah data category
            Swal.fire({
                title: 'Yeayy!',
                text: `Category ${result.category} has been added`,
                type: 'success',
                confirmButtonText: 'OK',
            }).then( () => {
                window.location.reload();
            })
            
        }else{
            Swal.fire({
                title: 'Ooops!',
                text: 'Form must be filled',
                type: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#E28935'
            })
        }
    }

    //Function untuk me-redirect halaman
    redirect = () =>{

        let searche = this.state.search;

        //Mengalihkan halaman dengan membawa query.params data yang di search
        return this.props.history.push(`/item/search?search=${searche} `)
    }
     


    render(){
        const {data} = this.state;
        

        return (
            <Fragment>
                <div className="search">
                    <div className="col-lg-12" style={{ backgroundColor: "red" }}>

                        <div className="input-group col-lg-11 shadow p-0 mb-1 bg-white rounded" style={{ float: "left" }}>
                            <div className="input-group-prepend" >
                                <div className="input-group-text bg-white" style={{ border: 0 }}><i className="fa fa-search"></i></div>
                            </div>

                            {/* Memanggil Component Search */}
                            <Search handleChange={async e => {

                                if (e.key === 'Enter') {

                                    await this.setState({
                                        search: e.target.value //Menetapkan value search
                                    }) 

                                    this.redirect() // Memanggil function redirect halaman
                                    
                                }                        

                                }
                            } />
                        </div>
                        <button className="btn btn-light shadow" style={{ float: "right", position: "absolute", right: 55 }}><i className="fa fa-gear"></i></button>

                    </div>
                </div>
                <div className="home">

                    {/* Memanggil component Modal menambah data */}
                    <ModalLayer handle={this.addData}/>
                    
                    
                    {   
                        //Memvalidasi data yang akan ditampilkan
                        (data.length > 0) ?


                            <CardHome data={data} /> //Memanggil Component Card home dengan membawa data dari state
                            : 
                            //Menampilkan 'No Data' jika tidak ada data
                            <h1 style={{ marginTop: 20, textAlign:"center" }} className="alert alert-danger">No Data</h1>
                    }
                    
                    
                </div>
            </Fragment>
        )
   

}

   
}

//Memanggil data dari Reducers
const mapStateToProps = state => {
    return{
        data:state.musicStore.categoryData,
        dataProducts:state.musicStore.productsData
    }
}

export default connect (mapStateToProps) (Home);
