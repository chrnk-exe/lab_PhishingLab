import React from 'react';
import classes from '../styles/Login.module.sass';
import { TextField } from '@mui/material';
import { Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import TextFieldPassword from './TextFieldPassword';

const Login = ({
	user,
	setUser,
}: {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}) => {
	const navigate = useNavigate();

	const loginHandler = () => {
		if (
			user.email === 'admin@hacktory.com' &&
			user.password === 'password'
		) {
			window.sessionStorage.setItem('user', JSON.stringify(user));
			navigate('/app');
		}
	};

	return (
		<div className={classes.login}>
			<Paper className={classes.Paper} elevation={5}>
				<form>
					<h2>Login</h2>
					<TextField
						fullWidth
						value={user.email}
						label={'Email'}
						required
						onChange={(e) =>
							setUser((prev) => ({ ...prev, email: e.target.value }))
						}
					/>
					<TextFieldPassword
						onChangeEventFunction={(e) =>
							setUser((prev) => ({ ...prev, password: e.target.value }))
						}
						required
						value={user.password || ''}
					/>
					<Button onClick={loginHandler}>Log in</Button>
				</form>
			</Paper>
		</div>
	);
};

export default Login;
