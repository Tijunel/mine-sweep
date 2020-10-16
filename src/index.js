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
			easy: true
		}
	}

	updateDifficulty = (state) => {
		this.setState({ easy: state });
	}

	render = () => {
		return (
			<React.Fragment>
				<div id='top-div'>
					<TopNavigation/>
					<div id="content">
						<Settings updateDifficulty={this.updateDifficulty}/>
						<Game difficulty={this.state.easy}/>
					</div>
				</div>
			</React.Fragment>	
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));