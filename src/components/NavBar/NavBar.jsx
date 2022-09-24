import React from 'react';

import './NavBarStyles.scss';

export default function NavBar(){
    return(
        <nav>
            <h2 id="title">GroceryView</h2>
            <div id="rightside">
                <h2 className='rightButtons'><a href='/'>Home</a></h2>
                <h2 className='rightButtons'><a href='/about'>About</a></h2>
                <h2 className='rightButtons'><a href='/mylist'>My List</a></h2>
            </div>
        </nav>
    )
}