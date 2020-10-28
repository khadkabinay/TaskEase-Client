import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
    return (
        <header className="header">
            <div >
                <NavLink to='/'>Home</NavLink>
            </div>
            <div >
                <NavLink to='/admin'>Admin Page</NavLink>
            </div>
        </header>
    )
}

export default Header;