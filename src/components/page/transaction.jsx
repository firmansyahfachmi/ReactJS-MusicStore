import React, { Component, Fragment } from "react";
import { Row, Col, Table } from "react-bootstrap";

import { connect } from "react-redux";
import { getTransaction } from "../../Publics/Redux/Action/transaction";

class Transaction extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    let id = this.props.match.params.id;
    await this.props.dispatch(getTransaction(id));
  };

  render() {
    return (
      <Fragment>
        <div className="transaction">
          <Row style={{ marginBottom: 10 }}>
            <Col>
              <h3>Riwayat Transaksi</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table bordered striped>
                <thead>
                  <tr>
                    <th>Nama Produk</th>
                    <th>Kategori</th>
                    <th>Quantity</th>
                    <th>Cabang</th>
                    <th>Harga</th>
                    <th>Tanggal</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.transaction.map(data => (
                    <tr>
                      <td>{data.name}</td>
                      <td>{data.id_category}</td>
                      <td>{data.quantity}</td>
                      <td>{data.id_branch}</td>
                      <td>{data.price}</td>
                      <td>{data.created_date}</td>
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
    transaction: state.transaction.transactionData
  };
};

export default connect(mapStateToProps)(Transaction);
