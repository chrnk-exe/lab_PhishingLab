import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Login from './Login';
import App from './App';
import NotFound from './NotFound';
import MessageItem from './MessageItem';
import Message from './Message';
import classes from '../styles/App.module.sass';
import { useAppSelector } from '../store/hooks';

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
				<Route path={'/login'} element={<Login />} />
				<Route
					path={'/app'}
					element={
						user.email ? <App /> : <Navigate to={'/login'} />
					}>
					<Route
						index
						element={
							<section id={classes.messages}>
								{messages.map(item => (
									<MessageItem 
										key={item.id} 
										id={item.id}
										subject={item.subject} 
										from={item.from}
										read={item.read}
										date={item.date}
										avatar={item.avatar || ''}
										text={item.text}
									/>
								))}
							</section>
						}
					/>
					<Route path={':messageId'} element={<Message />}/>
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
