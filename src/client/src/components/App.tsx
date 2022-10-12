import React from 'react';
import classes from '../styles/App.module.sass';
import Header from './Header';

function App({user} : {user: User}) {
	return (
		<div className={classes.App}>
			<Header />
			<main className={classes.main}>
				<p>Username: {user.email}</p>
				<p>Password: {user.password}</p>
			</main>
		</div>
	);
}

export default App;
