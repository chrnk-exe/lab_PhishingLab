import React from 'react';
import classes from '../styles/Header.module.sass';
import { Button, ButtonGroup } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppDispatch } from '../store/hooks';
import { markAllAsRead } from '../store/slices/messageSlice';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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
				<h2>
					<MailOutlineIcon sx={{ height: '40px', width: '40px' }} />
					Hacktory Mail Service
				</h2>
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
