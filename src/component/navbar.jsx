import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className='navbar'>
            <div className="brand-title">KURAL</div>
            <div className='nav-search'>
                <input type="search" />
                <button>search</button>
            </div>
            <div className="navbar-links">
                <ul>
                    <li><Link to={''} className='nav-link'>Home</Link ></li>
                    <li><Link to={'allbooks'} className='nav-link'>All Book</Link ></li>
                </ul>
            </div>
        </div>
      
    )
}

export default Navbar