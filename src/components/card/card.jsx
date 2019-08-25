import React from 'react';

import './card.css';

const Card = props => {
    return(
        <div className="card-list">
            {
                props.data.map(data => (
                    <div key={data.id} className="card1 shadow p-0 mb-1 rounded">
                        <img src={data.img}/>
                      
                        <div style={{ backgroundColor: "#F5D372",padding:15}}>
                            <h4>{data.name}</h4>
                            <div style={{ fontSize: 18, fontWeight: 500, padding: 5, borderTop: "2px solid grey"}}>{data.price}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Card;