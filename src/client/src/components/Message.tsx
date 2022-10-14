import React from 'react';
import { useParams } from 'react-router';

const Message = () => {
	const { messageId } = useParams();

	return <div>{messageId}</div>;
};

export default Message;
