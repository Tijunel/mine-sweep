import React from 'react';
import Tile from './tile';
import { Container, Row, Col } from 'react-bootstrap';
import '../styling/tileArea.css';

export default class TileArea extends React.Component {
    constructor(props) {
        super(props);
        this.tiles = [[]];
        this.info = [];
    }

    componentDidMount = () => {
        this.generateTiles();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.tiles = [];
            this.info = [];
            this.generateTiles();
        }
    }

    generateTiles = () => {
        let cols = (this.props.difficulty) ? 10 : 15;
        for (var i = 0; i < cols; i++) {
            this.tiles[i] = [];
            for (var j = 0; j < cols; j++) {
                var colour = (((i + 10) + j) % 2 === 0) ? '#0494F5' : '#0476C2';
                this.tiles[i].push(
                    <Col key={(i * 10) + j} style={{ padding: 0, margin: 0 }}>
                        <Tile row={i} col={j} colour={colour} />
                    </Col>
                );
            }
        }
        for (i = 0; i < cols; i++) {
            this.info.push(
                <Row key={(i * 10)} style={{ width: '100%', margin: 'auto' }}>
                    {this.tiles[i]}
                </Row>
            );
        }
        this.forceUpdate();
    }

    render = () => {
        return (
            <div id="game-border">
                <div id='tile-area'>
                    <Container>
                        {this.info}
                    </Container>
                </div>
            </div>
        );
    }
}