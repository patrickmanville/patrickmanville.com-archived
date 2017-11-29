import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';

// import data from './testData';
import App from './components/App';

ReactDOM.render(
	<App initialData={window.initialData} />,
	document.getElementById('root')
);

// ReactDOM.render(
// 	React.createElement('h2', null, 'Hello React')
// 		<h2 className="text-center">
// 			Hello React Component
// 		</h2>
// 	<App contests={data.contests} />,
// 	<App initialContests={...} />,
// 	document.getElementById('root')
// );
