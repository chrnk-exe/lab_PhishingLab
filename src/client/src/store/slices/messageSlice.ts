import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import mockupMessages from './mockupMessages';

const initialState: Message[] = [...mockupMessages];

export const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		setMessages: (state, action: PayloadAction<Message[]>) => {
			return action.payload;
		},
		addToTrash: (state, action: PayloadAction<number>) => {
			return state.map(message => {
				if (message.id === action.payload) {
					return {
						...message,
						type: 'trash' as BoxState,
					};
				} else return message;
			});
		},
		addToFavorites: (state, action: PayloadAction<number>) => {
			return state.map(message => {
				if (message.id === action.payload) {
					return {
						...message,
						favorite: true,
						type: 'favorite' as BoxState,
					};
				} else return message;
			});
		},
		addToSpam: (state, action: PayloadAction<number>) => {
			return state.map(message => {
				if (message.id === action.payload) {
					return {
						...message,
						type: 'spam' as BoxState,
					};
				} else return message;
			});
		},
		markRead: (state, action: PayloadAction<number>) => {
			return state.map(message => {
				if (message.id === action.payload) {
					return {
						...message,
						read: true,
					};
				} else return message;
			});
		},
		markAllAsRead: (state) => {
			return state.map(message => ({ ...message, read: true }));
		}
	},
});

export const {
	setMessages,
	addToSpam,
	addToFavorites,
	addToTrash,
	markRead,
	markAllAsRead,
} = messagesSlice.actions;
export default messagesSlice.reducer;
