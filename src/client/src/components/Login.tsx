import React from 'react';
import classes from '../styles/Login.module.sass';
import { TextField } from '@mui/material';
import { Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import TextFieldPassword from './TextFieldPassword';
import {setUserEmail, setUserPassword} from '../store/slices/userSlice';

const Login = () => {
	const user = useAppSelector(state => state.user);
	const dispatch = useAppDispatch();
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
							dispatch(setUserEmail(e.target.value))
						}
					/>
					<TextFieldPassword
						onChangeEventFunction={(e) =>
							dispatch(setUserPassword(e.target.value))
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
