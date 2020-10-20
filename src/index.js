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
			easy: true,
			started: false,
			showModal: false,
			modalInfo: {
				title: "",
				message: "",
				cancelOption: true,
				primaryButtonTitle: "Continue",
				successCallback: () => { },
				failureCallback: () => { }
			},
			engine: GameEngine.getInstance()
		}
	}

	updateDifficulty = (easy, callback) => {
		if (this.state.started)
			this.showModal(false, false,
				() => {
					this.state.engine.setGameMode(easy);
					this.setState({ easy: easy, started: false, showModal: false }, callback(true));
				},
				() => { this.setState({ started: true, showModal: false }, callback(false)); }
			);
		else {
			this.state.engine.setGameMode(easy);
			this.setState({ easy: easy, started: false });
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
		else this.setState({ started: started });
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
		if (finished) {
			info.cancelOption = false;
			info.primaryButtonTitle = "Try Again";
			if (win) {
				info.title = "Congratulations! You win!";
				info.message = `You finished in ${this.gameStatsRef.current.getTime()} seconds.`;
			} else {
				info.title = "Boom!";
				info.message = "You hit a mine! Please try again.";
			}
		}
		this.setState({ showModal: true, modalInfo: info });
	}

	reset = () => {
		this.setState({ showModal: false, started: false }, this.settingsRef.current.toggleStart());
	}

	render = () => {
		return (
			<React.Fragment>
				<div id='top-div'>
					<TopNavigation />
					<div id="content">
						<Settings
							updateDifficulty={this.updateDifficulty}
							updateStarted={this.updateStarted}
							ref={this.settingsRef}
						/>
						<TileArea
							easy={this.state.easy}
							started={this.state.started}
							showModal={this.showModal}
							reset={this.reset}
							gameStats={this.gameStatsRef}
						/>
						<GameStats
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