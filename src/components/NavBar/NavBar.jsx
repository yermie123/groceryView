import React from 'react';

import './NavBarStyles.scss';

export default function NavBar(){
    return(
        <nav>
            <h2 id="title">GroceryView</h2>
            <div id="rightside">
                <h2>Home</h2>
                <h2>About</h2>
                <h2>My List</h2>
            </div>
        </nav>
    )
}