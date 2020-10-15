import React from 'react';
import PlayArea from './playArea';

export default class Game extends React.Component {
    render = () => {
        return (
            <div id="game">
                <PlayArea difficulty={this.props.difficulty}/>
            </div>  
        );
    }
}