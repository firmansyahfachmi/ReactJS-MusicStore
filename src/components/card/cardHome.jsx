import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./card.css";

const Carde = props => {
  return (
    <div className="card-list">
      {props.data.map(data => (
        <Link
          to={`/item/${data.category_name || "all"}`}
          key={data.id}
          style={{ textDecoration: "none" }}
        >
          <Card
            style={{ width: "18rem", border: "none" }}
            className="card1 shadow p-0 mb-3 rounded"
            key={data.id}
          >
            <Card.Img variant="top" src={data.url} alt={data.category_name} />
            <Card.Body style={{ paddingLeft: 15, width: "100%" }}>
              <Card.Title style={{ color: "black", fontSize: 24 }}>
                {data.category_name}
              </Card.Title>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Carde;
