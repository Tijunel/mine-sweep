import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopNavigation from './navigation/topNav';
import Settings from './settings/settings';
import Game from './game/game';

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

	render = () => {
		return (
			<React.Fragment>
				<div id='top-div'>
					<TopNavigation/>
					<div id="content">
						<Settings updateDifficulty={this.updateDifficulty} updateStarted={this.updateStarted}/>
						<Game difficulty={this.state.easy} started={this.state.started}/>
					</div>
				</div>
			</React.Fragment>	
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));