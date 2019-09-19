import React, { Component, Fragment } from "react";
import { Button, Col, Row, Form, Badge, ButtonGroup } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import ModalLayer from "../modal/updateitem.jsx";

import { getCategory } from "../../Publics/Redux/Action/category.js";

import { getBranch } from "../../Publics/Redux/Action/branch.js";

import {
  deleteProducts,
  getProductsDetail,
  updateProducts,
  getProductsTable
} from "../../Publics/Redux/Action/products.js";

import { addWishlist } from "../../Publics/Redux/Action/wishlist.js";

import { addCart, editCart } from "../../Publics/Redux/Action/cart.js";

import "./detail.css";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      data: [], // Data products detail
      dataUpdate: [], //Data table products yang akan di update
      category: [],
      branch: [],
      dataFiltered: [],
      wishlistIcon: "fa fa-heart-o",
      isAddedtoCart: false,
      quantity: 0
    };
  }

  componentDidMount = async () => {
    let param = this.props.match.params.name; // Mengambil nilai parameter nama dari URL detail

    //Memanggil data dari products detail berdasarkan param
    await this.props.dispatch(getProductsDetail(param)).then(res => {
      this.setState({
        data: this.props.data
      });
    });

    //Memanggil data tabel products
    await this.props.dispatch(getProductsTable()).then(res => {
      this.setState({
        dataUpdate: this.props.products //Menetapkan data tabel products
      });
    });

    //Memanggil data dari category
    await this.props.dispatch(getCategory()).then(res => {
      this.setState({
        category: this.props.categories
      });
    });

    //Memanggil data dari branch
    await this.props.dispatch(getBranch()).then(res => {
      this.setState({
        branch: this.props.branches
      });
    });

    //Memfilter data productsDetail berdasarkan nama
    const filtered = this.state.data.filter(data =>
      data.name.toLowerCase().includes(param.toLowerCase())
    );

    this.setState({ dataFiltered: filtered[0] }); // Menetapkan dataFiltered
  };

  //Function delete products
  remove = i => {
    this.props.dispatch(deleteProducts(i)); // Memanggil action delete berdasarkan id
  };

  //Function updat data products
  updateData = result => {
    let param = this.state.dataFiltered.id;

    this.props.dispatch(updateProducts(param, result)); // Memanggil action update products

    Swal.fire({
      title: "Yeayy!",
      text: `Data has been updated`,
      type: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#E28935"
    }).then(() => {
      window.location.href = `/detail/${result.name}`;
    });
  };

  addWishlist = () => {
    let id = localStorage.getItem("userId");
    let x = this.state.wishlistIcon;
    if (x === "fa fa-heart-o") {
      this.props.dispatch(addWishlist(this.state.dataFiltered, id));
      this.setState({
        wishlistIcon: "fa fa-heart"
      });
    } else {
      this.setState({
        wishlistIcon: "fa fa-heart-o"
      });
    }
  };

  addCart = async data => {
    let find = false;
    this.props.cart.map(cart => {
      if (cart.id_product === data.id) {
        find = true;
      }
      return null;
    });

    let findqty = this.props.cart.filter(cart => cart.id_product === data.id);
    let qty = { ...findqty[0] };

    await this.setState({ quantity: this.state.quantity + qty.quantity || 1 });
    if (find === true) {
      let newData = { ...data, quantity: this.state.quantity };
      this.props.dispatch(editCart(newData)).then(res => {
        Swal.fire({
          type: "success",
          title: "Ditambahkan ke keranjang",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000
        });
      });
    } else {
      this.props.dispatch(addCart(data)).then(res => {
        Swal.fire({
          type: "success",
          title: "Ditambahkan ke keranjang",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000
        });
      });
    }
  };

  render() {
    let data = this.state.dataFiltered;

    return (
      <Fragment>
        <div className="detail" key={data.id}>
          <div className="image col-md-3 shadow">
            <img src={data.url} alt={data.name} />
          </div>
          <div className="detailed col-md-9">
            <div className="detailHead">
              <h3 className="title">{data.name} </h3>
              <div style={{ float: "right" }}>
                {/* Memanggil Component Modal update data */}
                {Number(localStorage.getItem("level")) === 1 ? (
                  <ModalLayer
                    data={data}
                    handle={this.updateData}
                    category={this.state.category}
                    branch={this.state.branch}
                    dataUpdate={this.state.dataUpdate}
                  />
                ) : (
                  ""
                )}

                {/* Button delete */}
                {Number(localStorage.getItem("level")) === 1 ? (
                  <>
                    <Button
                      variant="danger"
                      title="Delete"
                      onClick={() =>
                        //Validasi delete
                        {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "Are you sure want to delete this data",
                            type: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#E28935",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Delete"
                          }).then(result => {
                            if (result.value) {
                              this.remove(data.id); //Memanggil function delete dengan membawa
                              Swal.fire(
                                "Deleted!",
                                "Your Data has been deleted.",
                                "success"
                              );
                              window.location.href = `/item/${this.state.dataFiltered.category_name}`;
                            }
                          });
                        }
                      }
                    >
                      <i className="fa fa-trash"></i>
                    </Button>
                  </>
                ) : Number(localStorage.getItem("level")) === 2 ? (
                  <ButtonGroup>
                    <Button
                      variant="link"
                      className="pr-4"
                      onClick={this.addWishlist}
                    >
                      <i
                        style={{ color: "red", fontSize: 24 }}
                        className={this.state.wishlistIcon}
                      ></i>
                    </Button>
                    <Button onClick={() => this.addCart(data)}>
                      Tambahkan ke keranjang
                    </Button>
                  </ButtonGroup>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="detailBody">
              <p>{data.description}</p>
            </div>
            <div className="detailFoot">
              <Row style={{ margin: 5 }}>
                <Col
                  style={{ margin: "auto", padding: "auto", fontWeight: 500 }}
                >
                  Status
                </Col>
                <Col className="col-lg-8">
                  <h4>
                    {data.quantity > 0 ? (
                      <Badge variant="success">Available</Badge>
                    ) : (
                      <Badge variant="danger">Not Available</Badge>
                    )}
                  </h4>
                </Col>
              </Row>
              <Row style={{ margin: 5 }}>
                <Col
                  style={{ margin: "auto", padding: "auto", fontWeight: 500 }}
                >
                  Branch
                </Col>
                <Col className="col-lg-8">
                  <Form.Control value={data.branch_name} disabled />
                </Col>
              </Row>
              <Row style={{ margin: 5 }}>
                <Col
                  style={{ margin: "auto", padding: "auto", fontWeight: 500 }}
                >
                  Quantity
                </Col>
                <Col className="col-lg-8">
                  <Form.Control value={data.quantity} disabled />
                </Col>
              </Row>
              <Row style={{ margin: 5 }}>
                <Col
                  style={{ margin: "auto", padding: "auto", fontWeight: 500 }}
                >
                  Price
                </Col>
                <Col className="col-lg-8">
                  <Form.Control value={"Rp. " + data.price} disabled />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

//Memanggil data dari Reducers
const mapStateToProps = state => {
  return {
    data: state.products.detailData,
    products: state.products.productsTable,
    categories: state.category.categoryData,
    branches: state.branch.branchData,
    cart: state.cart.cartData
  };
};

export default connect(mapStateToProps)(Detail);
