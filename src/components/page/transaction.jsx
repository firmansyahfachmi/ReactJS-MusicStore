import React, { Component, Fragment } from "react";
import { Row, Col, Table } from "react-bootstrap";

import { connect } from "react-redux";
import {
  getTransaction,
  getTransactionAdmin
} from "../../Publics/Redux/Action/transaction";

class Transaction extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    let id = this.props.match.params.id;
    if (Number(localStorage.getItem("level")) === 1) {
      await this.props.dispatch(getTransactionAdmin());
    } else {
      await this.props.dispatch(getTransaction(id));
    }
  };

  convertTimestamp = timestamp => {
    timestamp.toString();
    return timestamp.slice(0, 10);
  };

  render() {
    console.log(this.props.transaction);
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
              {Number(localStorage.getItem("level")) === 1 ? (
                <Table bordered striped>
                  <thead>
                    <tr>
                      <th>Id User</th>
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
                        <td>{data.id_user}</td>
                        <td>{data.name}</td>
                        <td>{data.category_name}</td>
                        <td>{data.quantity}</td>
                        <td>{data.branch_name}</td>
                        <td>Rp. {data.price}</td>
                        <td>{this.convertTimestamp(data.created_date)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
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
                        <td>{data.category_name}</td>
                        <td>{data.quantity}</td>
                        <td>{data.branch_name}</td>
                        <td>Rp. {data.price}</td>
                        <td>{this.convertTimestamp(data.created_date)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
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
