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
        if(prevProps !== this.props) {
            this.tiles = [];
            this.info = [];
            this.generateTiles();
        } 
    }

    generateTiles = () => {
        let cols = (this.props.difficulty) ? 10 : 30;
        for(var i = 0; i < cols; i++) {
            this.tiles[i] = [];
            for(var j = 0; j < cols; j++) {
                this.tiles[i].push(
                    <Col key={(i*10)+j} style={{padding: 0, margin: 0}}>
                        <Tile/>
                    </Col>
                );
            }
        }
        for(i = 0; i < cols; i++) {
            this.info.push(
                <Row key={(i*10)} style={{width: '100%', margin: 'auto'}}>
                    {this.tiles[i]}
                </Row>
            );
        }
    }

    render = () => {
        return (
            <div id='tile-area'>
                <Container>
                {this.info}
                </Container>
            </div>
        );
    }
}