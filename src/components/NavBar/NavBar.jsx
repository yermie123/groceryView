import React from 'react';

import './NavBarStyles.scss';

export default function NavBar(){
    return(
        <nav>
            <h2 id="title">GroceryView</h2>
            <div id="rightside">
                <h2 className='rightButtons'>Home</h2>
                <h2 className='rightButtons'>About</h2>
                <h2 className='rightButtons'>My List</h2>
            </div>
        </nav>
    )
}