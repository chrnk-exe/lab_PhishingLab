import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Login from './Login';
import App from './App';
import NotFound from './NotFound';
import { useAppSelector } from '../store/hooks';

const AppRoutes = () => {
	const user = useAppSelector(state => state.user);

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
					element={<Login/>}
				/>
				<Route
					path={'/app'}
					element={
						user.email ? <App /> : <Navigate to={'/login'} />
					}
				/>
				<Route path="*" element={<NotFound redirToApp={user.email ? true : false}/>} />
			</Routes>
		</div>
	);
};

export default AppRoutes;
