import React from 'react';
import classes from '../styles/Header.module.sass';
import logo from '../assets/logo.png';
import { Button, ButtonGroup } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppDispatch } from '../store/hooks';
import { markAllAsRead } from '../store/slices/messageSlice';

const Header = () => {
	const logoutHandler = () => {
		window.sessionStorage.clear();
		window.location.reload();
	};

	const dispatch = useAppDispatch();

	const readHandler = () => dispatch(markAllAsRead());

	return (
		<div className={classes.header}>
			<section className={classes.headerItem}>
				<img src={logo} height={50} width={50} alt="" />
				<h2>Hacktory@mail</h2>
				<ButtonGroup variant="text" size="large">
					<Button
						onClick={readHandler}
						startIcon={<TaskAltIcon />}
						color="secondary">
						Mark all as read
					</Button>
				</ButtonGroup>
			</section>
			<section className={classes.headerItem}>
				<Button
					onClick={logoutHandler}
					size="large"
					startIcon={<LogoutIcon />}
					color="secondary">
					Log out
				</Button>
			</section>
		</div>
	);
};

export default Header;
