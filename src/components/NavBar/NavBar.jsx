import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import './NavBarStyles.scss';

export default function NavBar(){
    return(
        <nav>
            <h2 id="title"><Link to={`/login`}>GroceryView</Link></h2>
            <div id="rightside">
                <h2 className='rightButtons'><Link to={`/`}>Home</Link></h2>
                <h2 className='rightButtons'><Link to={`/about`}>About</Link></h2>
                <h2 className='rightButtons'><Link to={`/mylist`}>My List</Link></h2>
            </div>
        </nav>
    )
}