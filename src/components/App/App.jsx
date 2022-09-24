import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import NavBar from '../NavBar/NavBar.jsx';

import './AppStyle.scss';

import img1 from '../../assets/grocerydisplay1.jpg';
import img2 from '../../assets/grocerydisplay2.jpg';
import img3 from '../../assets/supermarketbirdseye.jpg';
const arr = [img1, img2, img3];

export default function App() {

    return(
        <div>
            <NavBar />
            <Carousel cArray={arr}/>
            <div id="maincontent">

            </div>
        </div>
    )
}