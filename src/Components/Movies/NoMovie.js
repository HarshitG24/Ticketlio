import React, { Component } from 'react';

/**
 * To dispaly the message when no movies are available to be shown.
 * @component
 */
class NoMovie extends Component {
    render() { 
        return <div>
            <h1 style={{textAlign: "center"}}>NO MOVIES TO SHOW</h1>
        </div>;
    }
}
 
export default NoMovie;