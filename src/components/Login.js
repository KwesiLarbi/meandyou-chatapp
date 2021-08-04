import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

export default function Login() {
	return (
		<div>
			<div id="login-page">
				<div id="login-card">
					<h2 style={{ color: 'white' }}>Welcome to Me&You</h2>

					<div 
							className="login-button google"
					>
							<GoogleOutlined /> Sign In with Google
					</div>

					<br /> <br />

					<div
						className="login-button facebook"
					>
						<FacebookOutlined /> Sign In with Facebook
					</div>
				</div>
			</div>

		</div>
	);
};