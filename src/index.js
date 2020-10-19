import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from "react-bootstrap";
import './styling/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopNavigation from './navigation/topNav';
import Settings from './settings/settings';
import TileArea from './game/tileArea';
import GameStats from './game/gamestats';

class App extends React.Component {
	constructor() {
		super();
		this.settingsRef = React.createRef();
		this.state = {
			easy: true,
			started: false
		}
	}

	updateDifficulty = (state) => {
		this.setState({ easy: state });
	}

	updateStarted = (started) => {
		this.setState({ started: started });
	}

	restartGame = (win) => {
		if(win) {

		}
	}

	render = () => {
		return (
			<React.Fragment>
				<div id='top-div'>
					<TopNavigation />
					<div id="content">
						<Settings updateDifficulty={this.updateDifficulty} updateStarted={this.updateStarted} />
						<TileArea difficulty={this.state.easy} started={this.state.started} />
						<GameStats started={this.state.started} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));