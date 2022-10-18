import React from 'react';
import logo from '../assets/mailrumessage.png';
import classes from './styles/MailRu.module.sass';

const MailRuMessage = () => {
	return (
		<div className={classes.message}>
			<header className={classes.logo}>
				<p>
					Log in form a new devise to your acount admin@hacktory.com
				</p>
				<img src={logo} height={65} alt="MailRu Logo SVG" />
			</header>
			<main className={classes.content}>
				<div>
					<p>
						To the account admin@hacktory.com loged in from a new
						devise.
					</p>
					<p>
						If you {'haven\'t'} done it,{' '}
						<a href={'#'}>change your password</a> to secure your
						account.
					</p>
					<ul>
						<li>Time: today at 03:18</li>
						<li>
							Devise: Microsoft Windows 10, Chromium,
							Saint-Petersburg, Russia{' '}
						</li>
					</ul>
					<p>
						Learn how to secure your account on our{' '}
						<a href={'#'}>security site</a>.
					</p>
				</div>
			</main>
			<footer className={classes.footer}>
				<p>
					<em>
						You received this email because you are a user Mail.ru
						based on the <a href={'#'}>User Agreement</a>.
					</em>
				</p>
				<p>
					<em>
						Copyright 2022 Mail.ru Group, Moscow — All rights
						reserved.
					</em>
				</p>
				<em>Mail ID Support Service</em>
			</footer>
		</div>
	);
};

export default MailRuMessage;
