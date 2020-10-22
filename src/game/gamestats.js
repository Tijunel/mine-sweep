import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GameEngine from './engine';
import '../styling/gamestats.css';

export default class GameStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerOn: false,
            time: 0,
            mines: 10,
            engine: GameEngine.getInstance()
        }
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.started !== this.props.started) {
            if (this.props.started) {
                this.startTimer();
            }
        } else if (prevProps.easy !== this.props.easy) {
            this.setState({ mines: this.state.engine.getStatus().nmines })
        }
    }

    // Timer Functions
    startTimer = () => {
        this.timer = setInterval(() => {
            this.setState({ time: this.state.time + 1 });
        }, 1000);
    }

    getTime = () => {
        return this.state.time;
    }

    // Mine Functions
    incrementMines = () => {
        this.setState({ mines: this.state.mines + 1 });
    }

    decrementMines = () => {
        this.setState({ mines: this.state.mines - 1 });
    }

    // External Helpers
    pause = () => {
        clearInterval(this.timer);
        this.setState({ mines: this.state.engine.getStatus().nmines });
    }

    reset = () => {
        clearInterval(this.timer);
        this.setState({ time: 0, mines: this.state.engine.getStatus().nmines });
    }

    render = () => {
        return (
            <div id="game-stats">
                <Container>
                    <Row>
                        <Col><b>Time: {this.state.time}</b></Col>
                        <Col><b>Mines: {this.state.mines}</b></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}