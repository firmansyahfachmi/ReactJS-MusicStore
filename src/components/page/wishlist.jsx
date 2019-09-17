import React, { Component, Fragment } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";

class Wishlist extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="wishlist">
        <Row style={{marginBottom:10}}>
          <Col><h3>My Wishlist</h3></Col>
        </Row>
        <Row>
          <Col>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Price</td>
                  <td>
                    <Button  style={{backgroundColor:'#E28935', border:'none', borderRadius:0}}>Tambahkan Ke Keranjang</Button>
                    <Button variant="danger" className="ml-3"style={{border:'none', borderRadius:0}}>Hapus</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        </div>
      </Fragment>
    );
  }
}

export default Wishlist;
