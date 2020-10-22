import React from 'react';
import ReactDOM from 'react-dom';
import MyModal from './navigation/modal';
import GameEngine from './game/engine';
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
		this.gameStatsRef = React.createRef();
		this.state = {
			easy: true, // Remove dup
			started: false, // Remove dup
			showModal: false,
			showEnd: false,
			endMessage: "Boom",
			modalInfo: {},
			engine: GameEngine.getInstance()
		}
	}

	updateDifficulty = (easy, callback) => {
		if (this.state.started)
			this.showModal(false, false,
				() => {
					this.state.engine.setGameMode(easy);
					this.gameStatsRef.current.reset();
					this.setState({ easy: easy, started: false, showModal: false }, callback(true));
				},
				() => { this.setState({ started: true, showModal: false }, callback(false)); }
			);
		else {
			this.state.engine.setGameMode(easy);
			this.gameStatsRef.current.reset();
			this.setState({ easy: easy, started: false }, callback(true));
		}
	}

	updateStarted = (started, callback) => {
		if (this.state.started)
			this.showModal(false, false,
				() => {
					this.state.engine.setGameMode(this.state.easy);
					this.setState({ started: started, showModal: false }, callback(true));
				},
				() => { this.setState({ showModal: false }, callback(false)); }
			);
		else this.setState({ started: started, showEnd: false });
	}

	showModal = (finished, win, successCallback, failureCallback) => {
		var info = {
			title: "You have a game in progress.",
			message: `Are you sure you want to stop? You will lose your progress.`,
			cancelOption: true,
			primaryButtonTitle: "Continue",
			successCallback: successCallback,
			failureCallback: failureCallback
		}
		this.setState({ showModal: true, modalInfo: info });
	}

	showEnd = (win) => {
		var endMessage = "Boom"
		if (win) endMessage = `You won in ${this.gameStatsRef.current.getTime()} seconds`;
		this.setState({ showEnd: true, endMessage: endMessage, started: false });
	}

	restart = () => {
		this.gameStatsRef.current.reset();
		this.state.engine.setGameMode(this.state.easy);
		this.setState({ showModal: false, started: false }, this.settingsRef.current.toggleStart());
	}

	render = () => {
		return (
			<React.Fragment>
				<div id='top-div'>
					<TopNavigation />
					<div id="content">
						<Settings
							ended={this.state.showEnd}
							endMessage={this.state.endMessage}
							updateDifficulty={this.updateDifficulty}
							updateStarted={this.updateStarted}
							restart={this.restart}
							ref={this.settingsRef}
						/>
						<TileArea
							easy={this.state.easy}
							started={this.state.started}
							showEnd={this.showEnd}
							restart={this.restart}
							gameStats={this.gameStatsRef}
							settings={this.settingsRef}
						/>
						<GameStats
							easy={this.state.easy}
							started={this.state.started}
							ref={this.gameStatsRef}
						/>
					</div>
					<MyModal showModal={this.state.showModal} modalInfo={this.state.modalInfo} />
				</div>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));