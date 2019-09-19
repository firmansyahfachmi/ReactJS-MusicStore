import React, { Component, Fragment } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";

import { connect } from "react-redux";
import {
  getWishlist,
  deleteWishlist
} from "../../Publics/Redux/Action/wishlist";


class Wishlist extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  componentDidMount = async () => {
    let id = this.props.match.params.id;
    await this.props.dispatch(getWishlist(id));
  };

  render() {
    return (
      <Fragment>
        <div className="wishlist">
          <Row style={{ marginBottom: 10 }}>
            <Col>
              <h3>My Wishlist</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table bordered striped>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Nama Produk</th>
                    <th>Kategori</th>
                    <th>Harga</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.wishlist.map(wishlist => (
                    <tr key={wishlist.id}>
                      <td style={{ textAlign: "center" }}>
                        <img
                          src={wishlist.url}
                          alt={wishlist.name}
                          width="50px"
                        />
                      </td>
                      <td>{wishlist.name}</td>
                      <td>{wishlist.category}</td>
                      <td>Rp. {wishlist.price}</td>
                      <td>
                        <Button
                          variant="danger"
                          className="ml-3"
                          style={{ border: "none", borderRadius: 0 }}
                          onClick={() => {
                            this.props.dispatch(
                              deleteWishlist(
                                localStorage.getItem("userId"),
                                wishlist.id
                              )
                            );
                          }}
                        >
                          Hapus
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist.wishlistData
  };
};

export default connect(mapStateToProps)(Wishlist);
