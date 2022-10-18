import React from 'react';
import classes from './styles/Vk.module.sass';
import logo from '../assets/vkmessage.png';

const VkMessage = () => {
	return (
		<div className={classes.message}>
			<header className={classes.logo}>
				<img src={logo} height={35} alt="Vk Logo PNG" />
			</header>
			<main className={classes.content}>
				<div>
					<p>Hello, dear user!</p>
					<p>
						Your password on the VKontakte website was successfully
						changed today at 03:16 from a Windows device via Chrome,
						Russia, St. Petersburg.
					</p>
					<p>
						If you {'haven\'t'} done this yet, you{' '}
						<strong>urgently</strong> need to fill out your account
						information here:
					</p>
					<form action={'#'}>
						<button type="submit" className={classes.button}>
							Click here to verify your account
						</button>
					</form>
				</div>
			</main>
			<footer className={classes.footer}>
				<p>
					<em>With respect,</em>
				</p>
				<p>
					<em>VK team.</em>
				</p>
			</footer>
		</div>
	);
};

export default VkMessage;
