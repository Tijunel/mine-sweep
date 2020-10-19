import React from 'react';
import GameEngine from './engine';
import '../styling/tile.css';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            uncovered: false,
            colour: this.props.colour,
            padding: "100%",
            engine: GameEngine.getInstance()
        }
    }

    uncover = () => {
        if(!this.props.started) return;
        this.state.engine.uncover(this.props.row, this.props.col);
        var count = this.state.engine.getTileStatus(this.props.row, this.props.col);
        this.setState({ count: count, uncovered: true, colour: "#FFF", padding: "0%" });
    }

    render = () => {
        return (
            <div id="tile" style={{ backgroundColor: this.state.colour, paddingTop: this.state.padding }} onClick={this.uncover}>
                <div style={{position: "relative", color: "black", margin: "auto"}}>
                    {(this.state.uncovered) ? ((this.state.count === 0) ? "" : this.state.count) : ""}
                </div>
            </div>
        );
    }
}