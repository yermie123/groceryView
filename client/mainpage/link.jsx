import React, { Component } from 'react';

class Link extends Component {
    render() {
        return (
            <div id="link-section">
                <a href={this.props.nlink}><button id="pushtorecord">Press Here to Start Recording</button></a>
            </div>
        )
    }
};

export default Link;