import NavBar from "../NavBar/NavBar";

import './AboutStyle.scss';

export default function About(){
    return(
        <div>
            <NavBar />
            <div id="aboutpage">
                <h2>GroceryView is a tool for visualizing change in prices of common supermarket goods.</h2>
                <div id='pcontent'>
                    <p>
                        Today, many prices drastically change for different goods.
                        Think of the recent time that baby formula was out of stock nearly everywhere.
                        While we are still under heavy development, we hope to bring about more information regarding
                        the change in prices from place to place.
                    </p>
                    <p>
                        We appreciate any donations to support our efforts.
                    </p>
                </div>
            </div>
        </div>
    )
}