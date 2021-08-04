import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';

import Chats from './components/Chats';
import Login from './components/Login';

export default function App() {
	return (
	<div sx={{ fontFamily: 'Avenir' }}>
		<Router>
			<Switch>
				<Route path="/" component={Login} />
			</Switch>
		</Router>
	</div>
	);
};
