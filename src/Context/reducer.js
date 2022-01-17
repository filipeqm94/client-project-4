import { useReducer } from 'react';

let user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : '';
let token = localStorage.getItem('token')
  ? JSON.parse(localStorage.getItem('token'))
  : '';

// initial state tree
export const userInitialState = {
  user: user,
  token: token,
  settings: {
    langPref: 'nopref',
    active: true,
  },
  chats: {
    activeChats: [''],
  },
};

export const chatInitialState = {
  messages: [
    {
      body: '',
    },
  ],
};

export const AuthReducer = (userInitialState, action) => {};
