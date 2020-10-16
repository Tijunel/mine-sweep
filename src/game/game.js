import React from 'react';
import TileArea from './tileArea';

export default class Game extends React.Component {
    render = () => {
        return (
            <div id="game">
                <TileArea difficulty={this.props.difficulty}/>
            </div>  
        );
    }
}