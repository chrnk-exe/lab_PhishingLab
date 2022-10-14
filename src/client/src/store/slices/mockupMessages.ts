import { initialState as user } from './userSlice';
import Google from '../../assets/Google.svg';
import Gmail from '../../assets/gmail.svg';
import Vk from '../../assets/Vk.svg';
import Yandex from '../../assets/Yandex.svg';
import Youtube from '../../assets/Youtube.svg';
import formatDate from '../../formatDate';


export default [
	{
		id: 1,
		subject: 'Account approving',
		from: 'Yandex',
		sender: 'support.a6@yandex.ru',
		to: user.email,
		text: 'Click this link to verify your account! http://yandex.com/?redirect=http://attacker.tk',
		read: false,
		date: formatDate(new Date('2022-10-13')),
		favorite: false,
		type: 'inbox',
		avatar: Yandex
	},
	{
		id: 2,
		subject: 'Someone logged in your account!!!',
		from: 'Gmail',
		sender: 'Google_mail@gmail.com',
		to: user.email,
		text: 'AAAAAAAAAAAAAAAAAA',
		read: true,
		favorite: false,
		date: formatDate(new Date('2022-10-13')),
		type: 'inbox',
		avatar: Gmail
	},
	{
		id: 3,
		subject: 'New video from your favorite channdel!',
		from: 'Youtube',
		sender: 'no-reply@youtube.com',
		to: user.email,
		text: 'NEW VIDEO CLICK HERE PLEWASE BRO!!!',
		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Youtube
	},
	{
		id: 4,
		subject: 'Approve password change',
		from: 'Vk',
		sender: 'admin@notify.vk.com',
		to: user.email,
		text: 'Click here to approve your new password',
		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Vk
	},
	{
		id: 5,
		subject: 'Security alert for your new account!',
		from: 'Google',
		sender: 'no-reply@accounts.google.com',
		to: user.email,
		text: 'Trying to login to your account from a new location',
		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Google
	}
] as Message[];