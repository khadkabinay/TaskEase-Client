import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
    return (
        <header >
            <div  >
                 <ul className="header">
                     <li><NavLink to='/'>Home</NavLink></li>
                     <li><NavLink to='/admin'>Admin Page</NavLink></li>
                     {/* <li><NavLink to='/'>SignIn</NavLink></li>
                     <li><NavLink to='/'>Sign Up</NavLink></li>
                     <li><NavLink to='/'>LogOut</NavLink></li> */}
                 </ul>
                
            </div>
        
        </header>
    )
}

export default Header;