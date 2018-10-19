import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Values from './components/Values';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Nanny App</h1>
				</header>
				<Values />
			</div>
		);
	}
}

export default App;