import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';

import Chats from './components/Chats';
import Login from './components/Login';

import { AuthProvider } from './contexts/AuthContext';

export default function App() {
	return (
	<div sx={{ fontFamily: 'Avenir' }}>
		<Router>
			<AuthProvider>
				<Switch>
					<Route path="/chats" component={Chats} />
					<Route path="/" component={Login} />
				</Switch>
			</AuthProvider>
		</Router>
	</div>
	);
};
