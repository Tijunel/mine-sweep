import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import GameEngine from '../game/engine';
import '../styling/settings.css';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            easy: true,
            started: false,
            engine: GameEngine.getInstance()
        }
    }

    toggleMode = () => {
        this.setState({
            easy: !this.state.easy,
            started: false
        },
            this.state.engine.setGameMode(!this.state.easy),
            this.props.updateDifficulty(!this.state.easy),
            this.props.updateStarted(!this.state.started)
        );
    }

    toggleStart = () => {
        this.setState({
            started: !this.state.started
        },
            this.state.engine.setGameMode(this.state.easy),
            this.props.updateStarted(!this.state.started)
        );
    }

    render = () => {
        return (
            <div id="settings">
                <div id="difficulty">
                    <Container>
                        <Row>
                            <Col>
                                <Button disabled={this.state.easy} onClick={this.toggleMode}>
                                    <div><b>Easy</b></div>
                                </Button>
                            </Col>
                            <Col>
                                <Button disabled={!this.state.easy} onClick={this.toggleMode}>
                                    <div><b>Hard</b></div>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div id="start">
                    <Container>
                        <Row>
                            <Col>
                                <Button onClick={this.toggleStart}>
                                    <div><b>{this.state.started ? "Stop" : "Start"}</b></div>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}