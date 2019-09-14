import React, { Fragment } from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./card.css";

const Carde = props => {
  const filtered = props.data.filter(data =>
    data.category_name.toLowerCase().includes(data.category_name.toLowerCase())
  );

  return (
    <Fragment>
      <div className="card-list" style={{ marginBottom: 50 }}>
        {filtered.map(data => (
          <Link
            to={`/detail/${data.name}`}
            style={{ textDecoration: "none" }}
            key={data.id}
          >
            <Card
              style={{
                width: "18rem",
                border: "none",
                backgroundColor: "whitesmoke"
              }}
              className="card1 shadow p-0 mb-3 rounded"
              key={data.id}
            >
              <h5 style={{ margin: 10 }}>
                {data.quantity > 0 ? (
                  <Badge variant="success">Available</Badge>
                ) : (
                  <Badge variant="danger">Not Available</Badge>
                )}
              </h5>
              <Card.Img variant="top" src={data.url} alt={data.name} />
              <Card.Body
                style={{
                  backgroundColor: "#F5D372",
                  padding: 15,
                  width: "100%"
                }}
              >
                <Card.Title style={{ color: "black", fontSize: "1em" }}>
                  {data.name.length > 20
                    ? data.name.substr(data.name, 27) + "..."
                    : data.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default Carde;
