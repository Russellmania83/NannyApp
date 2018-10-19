var axios = require('axios');

module.exports = {
	fetchSample: function() {
		var encodedURI = window.encodeURI('http://localhost:8080/api/sample');
		return axios.get(encodedURI).then(response => {
			console.log('fetchSample: ', response.data);
			return response.data;
		});
	}
};
