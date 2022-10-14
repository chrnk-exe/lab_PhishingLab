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
		}
	}
});

export const { setMessages } = messagesSlice.actions;
export default messagesSlice.reducer;