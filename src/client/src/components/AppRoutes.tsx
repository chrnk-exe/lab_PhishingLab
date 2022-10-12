import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Login from './Login';
import App from './App';
import NotFound from './NotFound';

const AppRoutes = () => {
	const [user, setUser] = useState<User>(
		JSON.parse(window.sessionStorage.getItem('user') as string) as User || {
			email: null,
			password: null,
		}
	);

	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={
						user.email === '' ? (
							<Navigate to={'/auth'} />
						) : (
							<Navigate to={'/app'} />
						)
					}
				/>
				<Route
					path={'/login'}
					element={<Login user={user} setUser={setUser} />}
				/>
				<Route
					path={'/app'}
					element={
						user.email ? <App user={user} /> : <Navigate to={'/login'} />
					}
				/>
				<Route path="*" element={<NotFound redirToApp={user.email ? true : false}/>} />
			</Routes>
		</div>
	);
};

export default AppRoutes;
