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
            <div class="info-card">
                <Pic npic={this.props.pic} />
                <Deets ndeets={this.props.deets} />
                <Link nlink={this.props.link} />
            </div>
        );
    }
}



export default Grouper;