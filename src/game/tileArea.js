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
        // Check if mine
        this.generateTiles();
    }

    generateTiles = () => {
        let rendering = this.state.engine.getRendering();
        let cols = (this.props.difficulty) ? 10 : 15;
        var tiles = [[]];
        var info = [];
        for (var i = 0; i < cols; i++) {
            tiles[i] = [];
            for (var j = 0; j < cols; j++) {
                var colour = (((i + 10) + j) % 2 === 0) ? '#0494F5' : '#0476C2';
                if (rendering !== undefined && !isNaN(rendering[i][j])) colour = "#FFF";
                tiles[i].push(
                    <Col key={(i * 10) + j} style={{ padding: 0, margin: 0 }}>
                        <Tile
                            row={i}
                            col={j}
                            colour={colour}
                            started={this.props.started}
                            count={rendering[i][j]}
                            uncovered={rendering[i][j] !== "H"}
                            uncoverTile={this.uncoverTile}
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