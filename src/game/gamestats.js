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
            mines: 0,
            engine: GameEngine.getInstance()
        }
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.started !== this.props.started) {
            if(this.props.started) this.startTimer();
            else this.stopTimer();
        } 
    }

    startTimer = () => {
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time + 1
            });
        }, 1000);
        this.setState({
            mines: this.state.engine.getMineCount()
        })
    }

    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({
            time: 0,
            mines: 0
        });
    }

    render = () => {
        return (
            <div id="game-stats">
                <Container>
                    <Row>
                        <Col>
                            <b>Time: {this.state.time}</b>
                        </Col>
                        <Col>
                            <b>Mines: {this.state.mines}</b>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}