import React from 'react';
import TileArea from './tileArea';
import GameStats from './gamestats';

export default class Game extends React.Component {
    render = () => {
        return (
            <div id="game">
                <TileArea difficulty={this.props.difficulty}/>
                <GameStats/>
            </div>  
        );
    }
}