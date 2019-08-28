import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./card.css";


const Carde = (props) => {
    const filtered = props.data.filter(data =>
        data.name.toLowerCase().includes(data.name.toLowerCase())
    )
    
    return (
        <div className="card-list" >
            {
                filtered.map(data => (
                    <Link to={`/detail/${data.name}`} style={{ textDecoration: "none" }}>
                        <Card style={{ width: '20rem', border: "none", backgroundColor:"whitesmoke"}} className="card1 shadow p-0 mb-3 rounded" key={data.id}>
                            <Card.Img variant="top" src={data.url} alt={data.name} />
                            <Card.Body style={{ backgroundColor: "#F5D372", padding: 15, width: "100%" }}>
                                <Card.Title style={{ color: "black", fontSize:"1.1em" }}>{data.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                ))
            }
        </div>
    )
}

export default Carde;