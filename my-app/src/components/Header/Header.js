import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
    return (
        <header >
            <div  >
                 <ul className="header">
                     <li><NavLink to='/'>Home</NavLink></li>
                     <li><NavLink to='/users'>Admin Page</NavLink></li>      
                 </ul>
                
            </div>
        
        </header>
    )
}

export default Header;