import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div className="header">
           
            <img src="https://s3-alpha-sig.figma.com/img/1f5b/7786/805fcbb07c7160d7aef31eed8494e2d5?Expires=1567382400&Signature=NGMxzc7U3bfK1vBiPZy5bsN9S0pCL4c40NHZFKkR4Q5FpYZUQ0xd36MAYjlESeodzlVPVwzXAiMQnwTm8h4MToAvBHszZVTy-KGZiYqgmY4S~Aw6dZK9TvYKXDAneMEo~7SFkebRA12gY5YJpHRr9A9aBpnTOmexYoNo876HI9CszB~540mGFgFdYWTmNmH8kKjMr1AbDGk2-do8g8Zzlk3MJbhu5YX4ImomxNvmFu7FGnLnPrEIbToJLHBgVGYxn3jZJsHH6~KI5x6bLHINSWpTZ47A0EcFsz4FiCURetjXpxaj3MHrUucipc1hAFcUheP2VQ3iI959W9KSqcj1Rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="logo" style={{width:"180px", position:"absolute", top:-45}}/>
            <span style={{position:"absolute", left:185, top:25, fontWeight:"500", fontSize:25, letterSpacing:3}}>ANEKA MUSIK</span>
     
          
            <button className="btn btn-outline-dark" style={{float:"right", marginTop:15,marginRight:30,fontSize:18}}>Login</button>
        </div>
    )
}

export default Header;
