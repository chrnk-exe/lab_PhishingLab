import React from 'react';

const MessageCount = ({ messages }: { messages: Message[] }) => (
	<div>
		{messages.filter(message => !message.read).length} / {messages.length}
	</div>
);

export default MessageCount;
