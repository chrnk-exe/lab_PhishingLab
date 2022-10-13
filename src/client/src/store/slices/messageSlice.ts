import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { initialState as user } from './userSlice';

const initialState: Message[] = [
	{
		id: 1,
		subject: 'Account approving',
		from: 'support.a6@yandex.ru',
		to: user.email,
		text: 'Click this link to verify your account! http://yandex.com/?redirect=http://attacker.tk',
		read: false,
		date: new Date('2022-10-13'),
		favorite: false,
		type: 'inbox'
	},
	{
		id: 2,
		subject: 'Someone logged in your account!!!',
		from: 'vk.com@gmail.com',
		to: user.email,
		text: 'AAAAAAAAAAAAAAAAAA',
		read: true,
		favorite: false,
		date: new Date('2022-10-13'),
		type: 'inbox'
	},
];

export const messagesSlice = createSlice({
	name: 'messages',   
	initialState,
	reducers: {
		setMessages: (state, action: PayloadAction<Message[]>) => {
			return action.payload;
		}
	}
});

export const { setMessages } = messagesSlice.actions;
export default messagesSlice.reducer;