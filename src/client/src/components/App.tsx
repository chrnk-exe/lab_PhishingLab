import React, { useState } from 'react';
import classes from '../styles/App.module.sass';
import { Paper } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CreateIcon from '@mui/icons-material/Create';
import Header from './Header';
import MessageCount from './MessageCount';
import { useAppSelector } from '../store/hooks';
import { useParams, Outlet } from 'react-router';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import DraftsIcon from '@mui/icons-material/Drafts';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useNavigate } from 'react-router';

function App() {
	const messages = useAppSelector(state => state.messages);
	const [selected, setSelected] = useState(1);
	const route = useParams();
	const navigate = useNavigate();

	const inboxHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		handleListItemClick(e, 2);
		navigate('/app');
	};

	const handleListItemClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number,
	) => {
		setSelected(index);
	};

	return (
		<div className={classes.App}>
			<Header />
			<main className={classes.main}>
				<Paper elevation={8} className={classes.mailApp}>
					<section id={classes.mailBox}>
						<List className={classes.list}>
							<ListItem>
								<ListItemButton
									selected={selected === 1}
									onClick={e => handleListItemClick(e, 1)}>
									<ListItemIcon>
										<CreateIcon />
									</ListItemIcon>
									<ListItemText>Compose</ListItemText>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton 
									selected={selected === 2}
									onClick={inboxHandler}>
									<ListItemIcon>
										<MessageCount messages={messages} />
									</ListItemIcon>
									<ListItemText>Inbox</ListItemText>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton
									selected={selected === 3}
									onClick={e => handleListItemClick(e, 3)}>
									<ListItemIcon>
										<BookmarksIcon />
									</ListItemIcon>
									<ListItemText>Favorites</ListItemText>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton
									selected={selected === 4}
									onClick={e => handleListItemClick(e, 4)}>
									<ListItemIcon>
										<SendIcon />
									</ListItemIcon>
									<ListItemText>Sent</ListItemText>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton
									selected={selected === 5}
									onClick={e => handleListItemClick(e, 5)}>
									<ListItemIcon>
										<DeleteIcon />
									</ListItemIcon>
									<ListItemText>Trash</ListItemText>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton
									selected={selected === 6}
									onClick={e => handleListItemClick(e, 6)}>
									<ListItemIcon>
										<ThumbDownAltIcon />
									</ListItemIcon>
									<ListItemText>Spam</ListItemText>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton
									selected={selected === 7}
									onClick={e => handleListItemClick(e, 7)}>
									<ListItemIcon>
										<DraftsIcon />
									</ListItemIcon>
									<ListItemText>Drafts</ListItemText>
								</ListItemButton>
							</ListItem>
						</List>
					</section>
					<Outlet />
				</Paper>
			</main>
		</div>
	);
}

export default App;
