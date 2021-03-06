import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../styling/settings.css';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            easy: true,
            started: false,
            showEnd: false
        }
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.ended !== this.props.ended) {
            if (this.props.ended) this.setState({ showEnd: true });
        }
    }

    toggleMode = () => {
        this.setState({ easy: !this.state.easy },
            this.props.updateDifficulty(!this.state.easy, (success) => {
                if (success) this.setState({ started: false, showEnd: false }, this.props.updateStarted(false));
                else this.setState({ easy: !this.state.easy });
            })
        );
    }

    toggleStart = () => {
        this.setState({ started: !this.state.started },
            this.props.updateStarted(!this.state.started, (success) => {
                if (!success) this.setState({ started: true });
            })
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
                <div id="start" style={{ display: (this.state.showEnd) ? "" : "none" }}>
                    <Container>
                        <Row>
                            <Col>
                                <Button onClick={() => { this.props.restart(); this.setState({ showEnd: false }) }}>
                                    <div><b>{this.props.endMessage}! Click me to restart!</b></div>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}