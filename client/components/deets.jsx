import React, { Component } from 'react';

class Deets extends Component {
    render() {
        return (
            <div id="deets-div">
                {this.props.ndeets}
            </div>
        )
    }
};
export default Deets;