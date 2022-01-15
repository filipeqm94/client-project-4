import React from 'react';

// initial state tree
const initialState = {
  userAuth: false,
  settings: {
    langPref: 'nopref',
    active: true,
  },
  chats: {
    activeChats: [''],
  },
};

function reducer(state = initialState, action) {}

export default reducer;
