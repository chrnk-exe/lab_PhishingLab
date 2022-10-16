import React from 'react';
import Button from '@mui/material/Button';
import classes from '../styles/MessageItem.module.sass';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../store/hooks';

const MessageItem = ({
	id,
	subject,
	from,
	read,
	date,
	avatar
}: {
	id: number;
	subject: string;
	from: string;
	read: boolean;
	date: string;
	avatar: string;
	text?: string;
}) => {
	const message = useAppSelector(state =>
		state.messages.find(message => message.id === id),
	);

	const navigate = useNavigate();

	

	return (
		<Button fullWidth onClick={() => navigate(`/app/${id}`)}>
			<div className={classes.messageItem}>
				<div className={classes.content}>
					<div>
						{!read ? <CircleRoundedIcon /> : <CircleOutlinedIcon />}
					</div>
					<div>
						<img src={avatar} width={45} alt="" />
					</div>
					<div className={classes.from}>{from}</div>
					<div>
						{!message?.favorite ? (
							<BookmarkBorderRoundedIcon />
						) : (
							<BookmarkRoundedIcon />
						)}
					</div>
					<div>{subject}</div>
					{/* <div>{text}</div> */}
				</div>
				<div>
					<div className={classes.msgDate}>{date}</div>
				</div>
			</div>
		</Button>
	);
};

export default MessageItem;
