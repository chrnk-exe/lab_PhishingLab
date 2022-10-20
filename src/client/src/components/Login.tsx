import React, { useState } from 'react';
import classes from '../styles/Login.module.sass';
import { TextField } from '@mui/material';
import { Paper, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import TextFieldPassword from './TextFieldPassword';
import { setUserEmail, setUserPassword } from '../store/slices/userSlice';

const Login = () => {
	const user = useAppSelector(state => state.user);
	const [error, setError] = useState(false);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const loginHandler = () => {
		if (
			user.email === 'admin@hacktory.com' &&
			user.password === 'password'
		) {
			window.sessionStorage.setItem('user', JSON.stringify(user));
			navigate('/app');
		} else {
			setError(true);
		}
	};

	return (
		<div className={classes.login}>
			<Paper className={classes.Paper} elevation={5}>
				<form>
					<h2>Login</h2>
					<TextField
						fullWidth
						value={user.email || ''}
						label={'Email'}
						required
						onChange={e => {
							dispatch(setUserEmail(e.target.value));
							setError(false);
						}}
					/>
					<TextFieldPassword
						onChangeEventFunction={e => {
							dispatch(setUserPassword(e.target.value));
							setError(false);
						}}
						required
						value={user.password || ''}
						error={error}
						helperText={error ? 'Incorrect login/password' : ''}
					/>
					<div className={classes.forgotPassword}>
						<Link href="#">Forgot password?</Link>
					</div>
					<Button
						fullWidth
						variant="contained"
						onClick={loginHandler}>
						Log in
					</Button>
				</form>
			</Paper>
		</div>
	);
};

export default Login;
