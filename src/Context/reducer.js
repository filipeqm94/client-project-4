import React, { useReducer } from 'react';

let user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).user
  : '';
let token = localStorage.getItem('token')
  ? JSON.parse(localStorage.getItem('token')).auth_token
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
  loading: true,
  errorMessage: null,
};

export const chatInitialState = {
  messages: [
    {
      body: '',
    },
  ],
  loading: true,
};

export const messageInitialState = {
  status: null,
};

export const AuthReducer = (userInitialState, action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...userInitialState,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...userInitialState,
        user: action.payload.user,
        token: action.payload.auth_token,
        loading: false,
      };
    case 'LOG_OUT':
      return {
        ...userInitialState,
        user: '',
        token: '',
      };
    case 'LOGIN_ERROR':
      return {
        ...userInitialState,
        loading: false,
        errorMessage: action.error,
      };
    case 'GET_USER_CHATS':
      return {
        ...userInitialState,
        chats: { activeChats: action.payload },
        loading: false,
      };
    case 'UPDATE_USER_CHATS':
      return {
        ...userInitialState,
        chats: { activeChats: action.payload },
        loading: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const ChatReducer = (chatInitialState, action) => {
  switch (action.type) {
    case 'GET_CHAT_MESSAGES':
      return {
        ...chatInitialState,
        messages: action.payload,
      };
    default:
      return chatInitialState;
  }
};
