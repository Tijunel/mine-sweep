import React from 'react';
import TileArea from './tileArea';
import { Container } from 'react-bootstrap';
import '../styling/playArea.css';

export default class PlayArea extends React.Component {
    constructor(props) {
        super(props);
        this.widthRef = React.createRef();
        this.state = {
            width: 0
        }
    }

    componentDidMount = () => {
        this.setState({
            width: this.widthRef.current.width
        }, window.addEventListener('resize', this.handleResize));
    }

    handleResize = () => {
        this.setState({
            width: this.widthRef.current.offsetWidth
        });
    }

    render = () => {
        return (
            <div id="play-area">
                <Container>
                    <div id="game-border" ref={this.widthRef}>
                        <TileArea width={this.state.width} difficulty={this.props.difficulty}/>
                    </div>
                </Container>
            </div>
        )
    }
}