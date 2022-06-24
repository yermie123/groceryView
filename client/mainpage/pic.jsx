import React, { Component } from 'react';

class Pic extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <img id="selectimg" src={this.props.npic} />
        )
    }
};

export default Pic;