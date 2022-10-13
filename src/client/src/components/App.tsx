import React from 'react';
import classes from '../styles/App.module.sass';
import { Paper, Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import Header from './Header';
import MessageItem from './MessageItem';
import MessageCount from './MessageCount';
import { useAppSelector } from '../store/hooks';

function App() {
	const messages = useAppSelector(state => state.messages);

	return (
		<div className={classes.App}>
			<Header />
			<main className={classes.main}>
				<Paper elevation={8} className={classes.mailApp}>
					<section id={classes.mailBox}>
						<Button
							variant="contained"
							fullWidth
							endIcon={<CreateIcon />}>
							Compose
						</Button>
						<Button className={classes.boxButton} fullWidth endIcon={<MessageCount messages={messages}/>}>
							Inbox
						</Button>
						<Button className={classes.boxButton} fullWidth>
							Sent
						</Button>
						<Button className={classes.boxButton} fullWidth>
							Trash
						</Button>
						<Button className={classes.boxButton} fullWidth>
							Spam
						</Button>
						<Button className={classes.boxButton} fullWidth>
							Drafts
						</Button>
					</section>
					<section id={classes.messages}>
						<Paper elevation={8}>

						</Paper>
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
				</Paper>
			</main>
		</div>
	);
}

export default App;
