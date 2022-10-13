import React from 'react';
import Button from '@mui/material/Button';
import classes from '../styles/MessageItem.module.sass';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import formatDate from '../formatDate';

const MessageItem = ({
	id,
	subject,
	from,
	read,
	date,
	avatar,
	text
}: {
	id: number;
	subject: string;
	from: string;
	read: boolean;
	date: Date;
	avatar: string;
	text: string;
}) => {
	const message = useAppSelector(state =>
		state.messages.find(message => message.id === id),
	);

	return (
		<Button fullWidth>
			<div className={classes.messageItem}>
				<div>
					{read ? <CircleRoundedIcon /> : <CircleOutlinedIcon />}
				</div>
				<div>
					<img src={avatar} height={45} width={45} alt="" />
				</div>
				<div>{from}</div>
				<div>
					{message?.favorite ? (
						<BookmarkBorderRoundedIcon />
					) : (
						<BookmarkRoundedIcon />
					)}
				</div>
				<div>{subject}</div>
				<div>{text}</div>
				<div className={classes.msgDate}>{formatDate(date)}</div>
			</div>
		</Button>
	);
};

export default MessageItem;
