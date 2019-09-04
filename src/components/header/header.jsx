import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './logo.png'

import './header.css';

const Header = () => {
    return (
        <div className="header shadow">
            
            <Link to="/" style={{color:"black"}}>
            <img src={Logo} alt="logo" style={{width:"180px", position:"absolute", top:-45}}/>
            <span style={{position:"absolute", left:185, top:25, fontWeight:"500", fontSize:25, letterSpacing:3}}>ANEKA MUSIK</span>
            </Link>
          
            <button className="btn btn-outline-dark" style={{float:"right", marginTop:15,marginRight:30,fontSize:18}}>Login</button>
        </div>
    )
}

export default Header;
