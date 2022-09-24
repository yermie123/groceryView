import React, { useState, useEffect } from 'react';
import './CarouselStyle.scss';

export default function Carousel(props){
    const [Num, setNum] = useState(0);

    const change = setTimeout(() => {
        if(Num >= 2){
            setNum(0);
        } else {
            setNum(Num + 1);
        }
    }, 5000)

    useEffect(() => {
        return () => clearTimeout(change);
    })

    return(
        <div id="img-carousel">
            <img src={props.cArray[`${Num}`]}></img>
            <div id="centered">
                <h1>Keep Track of Grocery Price Data with Ease</h1>
                <h2 id="learnmoreButton" onClick={props.handleClick}>Learn More</h2>
            </div>
        </div>
    )
}