import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Login from './Login';
import App from './App';
import NotFound from './NotFound';
import Message from './Message';
import { useAppSelector } from '../store/hooks';
import FilteredMessagesBy from './FilteredMessagesBy';
import boxStates from '../boxStates';

const AppRoutes = () => {
	const user = useAppSelector(state => state.user);
	const messages = useAppSelector(state => state.messages);

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
				<Route path={'/auth'} element={<Login />} />
				<Route
					path={'/app'}
					element={user.email ? <App /> : <Navigate to={'/auth'} />}>
					<Route
						index
						element={<FilteredMessagesBy messages={messages} />}
					/>
					<Route path={':messageId'} element={<Message />} />

					{boxStates.map(boxState => (
						<Route
							key={boxState}
							path={boxState}
							element={
								<FilteredMessagesBy
									filterArg={boxState}
									messages={messages}
								/>
							}
						/>
					))}
				</Route>
				<Route
					path="*"
					element={
						<NotFound redirToApp={user.email ? true : false} />
					}
				/>
			</Routes>
		</div>
	);
};

export default AppRoutes;
