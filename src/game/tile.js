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
            height: 0
        }
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleResize);
        this.setState({ height: this.tileRef.current.offsetWidth });
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps !== this.props) {
            this.setState({ count: this.props.count, uncovered: this.props.uncovered, colour: this.props.colour, fontSize: 0.25 * this.tileRef.current.offsetWidth});
            this.handleResize();
        }
    }

    handleResize = () => {
        this.setState({
            fontSize: 0.25 * this.tileRef.current.offsetWidth,
            height: this.tileRef.current.offsetWidth
        });
    }

    uncover = () => {
        if(!this.props.started) return;
        this.props.uncoverTile(this.props.row, this.props.col);
    }

    render = () => {
        return (
            <div id="tile" style={{ backgroundColor: this.state.colour, height: this.state.height}} onClick={this.uncover} ref={this.tileRef}>
                <div style={{fontSize: this.state.fontSize, margin: "auto"}}>
                    {(this.state.uncovered) ? (this.state.count === "0") ? "" : this.state.count : ""}
                </div>
            </div>
        );
    }
}