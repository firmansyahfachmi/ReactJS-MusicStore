import React from 'react';

import './search.css';

const Search = () =>{
    return(
        <div className="search">
            <div className="col-lg-12" style={{backgroundColor:"red"}}>

                <div className="input-group col-lg-11 shadow p-0 mb-1 bg-white rounded" style={{ float: "left" }}>
                    <div class="input-group-prepend" >
                        <div className="input-group-text" style={{ border: 0 }}><i className="fa fa-search"></i></div>
                    </div>
                
                    <input type="text" className="form-control" style={{border:0}} placeholder="Search.."/>
                </div>
                <button className="btn btn-light shadow" style={{ float: "right",position:"absolute", right:55}}><i className="fa fa-gear"></i></button>
               
            </div>
        </div>
    )
}

export default Search
