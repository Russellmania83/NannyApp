import React from 'react';
import * as api from '../utils/api';

class Values extends React.Component {
	state = {
		sample: []
	};

	callSample = () => {
		api.fetchSample().then(response => {
			console.log('callSample: ', response);
			this.setState(() => {
				return {
					sample: response
				};
			});
			console.log('after SetState: ', this.state.sample);
		});
	};

	componentDidMount() {
		this.callSample();
		console.log('componentDidMount: ', this.state.sample);
	}

	render() {
		return <div>{this.state.sample}</div>;
	}
}

export default Values;