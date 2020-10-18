import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styling/gamestats.css';

export default class GameStats extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div id="game-stats">
                <Container>
                    <Row>
                        <Col>
                            <b>Time: {this.props.time}</b>
                        </Col>
                        <Col>
                            <b>Mines: {this.props.mines}</b>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}