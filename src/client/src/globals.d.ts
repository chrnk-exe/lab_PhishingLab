declare module '*.scss';
declare module '*.sass';

declare interface User {
	email: string | null;
	password: string | null;
}

declare interface Message {
	id: number;
	subject: string;
	from: string;
	sender: string;
	to: string | null;
	avatar?: string;
	text: string;
	date: string;

	read: boolean;
	favorite: boolean;
	type: BoxState;
}

declare type BoxState =
	| 'inbox'
	| 'trash'
	| 'spam'
	| 'sent'
	| 'drafts'
	| 'favorite';
