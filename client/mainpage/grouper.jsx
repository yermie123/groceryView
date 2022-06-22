import React, { Component } from 'react';
import Pic from './pic.jsx';
import Deets from './deets.jsx';
import Link from './link.jsx';

class Grouper extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="info-card">
                <Pic />
                <Deets />
                <Link />
            </div>
        );
    }
}