import React, { Component, Fragment } from "react";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import {
  getProducts,
  postProducts
} from "../../Publics/Redux/Action/products.js";

import ModalLayer from "../modal/modalitem.jsx";
import CardItem from "../card/carditem.jsx";

import "./item.css";

class Item extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: "",
      page: 1
    };
  }

  componentDidMount = async () => {
    let param = this.props.match.params.category || "all";

    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("keyword") || null;

    await this.props
      .dispatch(getProducts(param, search, this.state.page))
      .then(res => {
        this.setState({
          data: this.props.data
        });
      });
  };

  // Function tambah data products
  addData = result => {
    //Validasi jika data yang di isi kosong
    if (Object.keys(result).length > 0) {
      this.props.dispatch(postProducts(result)); //Memanggil action untuk tambah data products

      Swal.fire({
        title: "Yeayy!",
        text: `Data ${result.name} has been added`,
        type: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#E28935"
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

  pageMount = async () => {
    let param = this.props.match.params.category || "all";

    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("keyword") || null;

    await this.props
      .dispatch(getProducts(param, search, this.state.page))
      .then(res => {
        this.setState({
          data: this.props.data
        });
      });
  };

  nextPage = async () => {
    const maxPaginate = Math.ceil(this.state.data.length / 2);

    if (this.state.page < maxPaginate) {
      let next = this.state.page + 1;
      await this.setState({ page: next });

      this.pageMount();
    }
  };

  prevPage = async () => {
    if (this.state.page > 1) {
      let previous = this.state.page - 1;
      await this.setState({ page: previous });

      this.pageMount();
    }
  };

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        <div className="item">
          {/* Memanggil Component Modal untuk tambah data, dan membawa data dari category dan branch */}
          <ModalLayer handle={this.addData} />

          {//Memvalidasi data yang akan ditampilkan
          data.length > 0 ? (
            <CardItem data={data} /> //Memanggil Component Card item dengan membawa data dari state
          ) : (
            //Menampilkan 'No Data' jika tidak ada data
            <h1
              style={{ marginTop: 20, textAlign: "center" }}
              className="alert alert-danger"
            >
              No Data
            </h1>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            marginLeft: "-50px",
            display: "flex"
          }}
        >
          {this.state.data.length > 0 ? (
            <Pagination className="shadow-lg" variant="info">
              <Pagination.Prev onClick={this.prevPage} />
              {/* {data.map(num => ( */}
              {/* <Pagination.Item key="1" active>1</Pagination.Item> */}
              {/* )) */}
              {/* } */}
              <Pagination.Next onClick={this.nextPage} />
            </Pagination>
          ) : (
            <span></span>
          )}
        </div>
      </Fragment>
    );
  }
}

//Memanggil data dari Reducers
const mapStateToProps = state => {
  return {
    data: state.products.productsData,
    load: state.products.isLoading
  };
};

export default connect(mapStateToProps)(Item);
