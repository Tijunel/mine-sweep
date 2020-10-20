import React from 'react';
import '../styling/tile.css';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.tileRef = React.createRef();
        this.state = {
            count: this.props.count,
            uncovered: this.props.uncovered,
            colour: this.props.colour,
            fontSize: 0,
            height: 0,
            touchTime: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleResize);
        this.setState({ height: this.tileRef.current.offsetWidth });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                count: this.props.count,
                uncovered: this.props.uncovered,
                colour: this.props.colour,
                fontSize: 0.25 * this.tileRef.current.offsetWidth
            });
            this.handleResize();
        }
    }

    handleResize = () => {
        this.setState({
            fontSize: 0.25 * this.tileRef.current.offsetWidth,
            height: this.tileRef.current.offsetWidth
        });
    }

    handleClick = () => {
        if (!this.props.started || this.state.count === "F") return;
        this.props.uncoverTile(this.props.row, this.props.col);
    }

    handleRightClick = (e) => {
        e.preventDefault();
        if (!this.props.started) return;
        if (this.state.touchTime !== 0) return;
        this.props.markTile(this.props.row, this.props.col);
    }

    handleTouchStart = () => {
        if (!this.props.started && this.state.touchTime === 0) return;
        this.timer = setInterval(() => {
            this.setState({ touchTime: this.state.touchTime + 10 });
        }, 10);
    }

    handleTouchEnd = () => {
        if (!this.props.started && this.state.touchTime > 0) return;
        if (this.state.touchTime > 990) this.props.markTile(this.props.row, this.props.col);
        clearInterval(this.timer);
        this.setState({ touchTime: 0 });
    }

    render = () => {
        return (
            <div id="tile" style={{ backgroundColor: this.state.colour, height: this.state.height, cursor: ((this.state.uncovered) ? "" : "pointer") }} onClick={this.handleClick} onContextMenu={this.handleRightClick} onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} ref={this.tileRef}>
                <div style={{ fontSize: this.state.fontSize, margin: "auto" }}>
                    {(this.state.uncovered) ? (this.state.count === "0" || this.state.count === "M") ? "" : this.state.count : ""}
                </div>
            </div>
        );
    }
}