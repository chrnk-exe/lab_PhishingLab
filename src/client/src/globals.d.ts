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
	payload: string;
	date: string;
	type: BoxState;
	read: boolean;
	favorite: boolean;
    
	avatar?: string;
}

declare type BoxState =
	| 'inbox'
	| 'trash'
	| 'spam'
	| 'sent'
	| 'drafts'
	| 'favorite';
