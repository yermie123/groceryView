import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, BrowserRouter } from 'react-router-dom';

import Carousel from './Carousel.jsx';
import NavBar from '../NavBar/NavBar.jsx';

import './AppStyle.scss';

import img1 from '../../assets/grocerydisplay1.jpg';
import img2 from '../../assets/grocerydisplay2.jpg';
import img3 from '../../assets/supermarketbirdseye.jpg';
const arr = [img1, img2, img3];

import imgWebsites from '../../assets/websites.png';
import imgData from '../../assets/data.png';
import imgCashier from '../../assets/cashier.png';


import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import ThirdPartyEmailPassword, {Github, Google, Facebook, Apple} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";


SuperTokens.init({
    appInfo: {
        // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
        appName: "GroceryView",
        apiDomain: "http://localhost:8080",
        websiteDomain: "http://localhost:3000",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            signInAndUpFeature: {
                providers: [
                    Github.init(),
                    Google.init(),
                    Facebook.init(),
                    Apple.init(),
                ]
            }
        }),
        Session.init()
    ]
});

export default function App() {
    const mainContentRef = React.useRef(null);

    const handleClick = () => {
        mainContentRef.current.scrollIntoView(true);
    }

    return(
        <div>
            <NavBar />
            <Carousel cArray={arr} link='maincontent' handleClick={handleClick} />
            <div id="maincontent" ref={mainContentRef}>
                <div id='predtitle'>
                    <h3 id='t1'>
                        GroceryView is a new Way of Tracking Supermarket Prices from your Home
                    </h3>
                    <h3 id='t2'>
                        Track Prices of Most Foods and Items
                    </h3>
                </div>
                <div id='d1'>
                    <div id='d1-1'>
                        <img src={imgWebsites}></img>
                    </div>
                    <h3>
                        Data is Scraped from Different Store Websites
                    </h3>
                </div>
                <div id='d2'>
                    <h3>
                        Next, the Data is Sent to Individual Users
                    </h3>
                    <div id='d2-2'>
                        <img src={imgData}></img>
                    </div>
                </div>
                <div id='d3'>
                    <div id='d3-3'>
                        <img src={imgCashier}></img>
                    </div>
                    <h3>
                        Users Can Compare and Analyze Different Prices
                    </h3>
                </div>
                <Link to={`/mylist`}><div id='linkbutton'>
                    <h3>Explore Our Free Features by Creating an Account</h3>
                </div></Link>
            </div>
            <div id='footer'>
                <h3>Copyright 2022</h3>
            </div>
        </div>
    )
}