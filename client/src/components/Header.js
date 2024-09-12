import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <ul>
                <li><Link to="/">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/data">Data</Link></li>
            </ul>
        </div>
    )
}

export default Header;
