import React from 'react';
import '../styling/tile.css';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render = () => {
        return (
            <div id="tile" style={{backgroundColor: this.props.colour}}>

            </div>
        );
    }
}