import React, {Fragment} from 'react';

import './search.css';

const Search = ({handleChange}) =>(
   
        <Fragment>
        <input type="search" className="form-control" style={{ border: 0 }} placeholder="Search..." 
            onChange={handleChange}/>
        </Fragment>
    
)

export default Search;
