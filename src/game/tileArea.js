import React from 'react';
import Tile from './tile';
import { Container, Row, Col } from 'react-bootstrap';
import GameEngine from './engine';
import '../styling/tileArea.css';

export default class TileArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: [[]],
            info: [],
            engine: GameEngine.getInstance()
        }
    }

    componentDidMount = () => {
        this.generateTiles();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) this.generateTiles();
    }

    uncoverTile = (row, col) => {
        this.state.engine.uncover(row, col);
        this.handleGameEnd();
        this.generateTiles();
    }

    handleGameEnd = () => {
        let status = this.state.engine.getStatus();
        let restart = () => { this.state.engine.setGameMode(this.props.easy); this.props.reset(); }
        if(status.done) this.props.gameStats.current.pauseTimer();
        if (status.done && status.exploded) this.props.showModal(true, false, restart, restart);
        else if (status.done && !status.exploded) this.props.showModal(true, true, restart, restart);
    }

    markTile = (row, col) => {
        this.state.engine.mark(row, col);
        this.generateTiles();
    }

    generateTiles = () => {
        let rendering = this.state.engine.getRendering();
        let cols = (this.props.easy) ? 10 : 15;
        var tiles = [[]];
        var info = [];
        for (var i = 0; i < cols; i++) {
            tiles[i] = [];
            for (var j = 0; j < cols; j++) {
                var colour = (((i + 10) + j) % 2 === 0) ? '#0494F5' : '#0476C2';
                if (rendering !== undefined && !isNaN(rendering[i][j])) colour = "#FFF";
                if (rendering !== undefined && (rendering[i][j] === "F" || rendering[i][j] === "M")) colour = "#800000";
                tiles[i].push(
                    <Col key={(i * 10) + j} style={{ padding: 0, margin: 0 }}>
                        <Tile
                            row={i}
                            col={j}
                            colour={colour}
                            started={this.props.started}
                            count={rendering[i][j]}
                            uncovered={rendering[i][j] !== "H" && rendering[i][j] !== "F"}
                            uncoverTile={this.uncoverTile}
                            markTile={this.markTile}
                        />
                    </Col>
                );
            }
        }
        for (i = 0; i < cols; i++) info.push(<Row key={(i * 10)} style={{ margin: 'auto' }}>{tiles[i]}</Row>);
        this.setState({ tiles: tiles, info: info });
    }

    render = () => {
        return (
            <div id="game-border">
                <div id='tile-area'>
                    <Container>
                        {this.state.info}
                    </Container>
                </div>
            </div>
        );
    }
}