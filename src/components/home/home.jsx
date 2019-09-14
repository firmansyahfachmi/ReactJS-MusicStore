import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import ModalLayer from "../modal/modalHome.jsx";
import CardHome from "../card/cardHome.jsx";

import {
  getCategory,
  postCategory
} from "../../Publics/Redux/Action/category.js";

import "./home.css";

class Home extends Component {
  state = {
    data: [],
    search: ""
  };

  componentDidMount = async () => {
    //Memanggil data dari category
    await this.props.dispatch(getCategory());
    this.setState({
      data: this.props.data
    });
  };

  //Function tambah data category
  addData = result => {
    //Validasi jika data yang di isi kosong
    if (Object.keys(result).length > 0) {
      this.props.dispatch(postCategory(result)); //Memanggil action tambah data category
      Swal.fire({
        title: "Yeayy!",
        text: `Category ${result.category} has been added`,
        type: "success",
        confirmButtonText: "OK"
      }).then(async () => {
        // await this.props.dispatch(getCategory())
        // this.setState({
        //     data: this.props.data
        // })
      });
    } else {
      Swal.fire({
        title: "Ooops!",
        text: "Form must be filled",
        type: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#E28935"
      });
    }
  };

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        <div className="home">
          {/* Memanggil component Modal menambah data */}
          <ModalLayer handle={this.addData} />

          {//Memvalidasi data yang akan ditampilkan
          data.length > 0 ? (
            <CardHome data={data} /> //Memanggil Component Card home dengan membawa data dari state
          ) : (
            //Menampilkan 'No Data' jika tidak ada data
            <h1
              style={{ marginTop: 20, textAlign: "center", zIndex: 0 }}
              className=""
            >
              No Data
            </h1>
          )}
        </div>
      </Fragment>
    );
  }
}

//Memanggil data dari Reducers
const mapStateToProps = state => {
  return {
    data: state.category.categoryData
  };
};

export default connect(mapStateToProps)(Home);
