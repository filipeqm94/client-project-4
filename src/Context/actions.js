const DB_URL = process.env.REACT_APP_DB_URL;
const currentUser = {};

export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let response = await fetch(`${DB_URL}/login`, requestOptions);
    let data = await response.json();

    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }

    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}

export async function getUserChatList(dispatch, payload) {
  try {
    let response = await fetch(`${DB_URL}`);
    let data = await response.json();
    dispatch({ type: 'GET_USER_CHATS', payload: data });
  } catch (error) {
    console.error(error);
  }
}

// combined add/remove chat with other users
export async function updateUserChatList(dispatch, payload) {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };
  try {
    let response = await fetch(`${DB_URL}/${currentUser.id}`, requestOptions);
    let data = await response.json();
    dispatch({ type: 'GET_USER_CHATS', payload: data });
  } catch (error) {
    console.error(error);
  }
}

// consider handling this on comp - may remove
// alternative is to have single update function
// export async function addChat(dispatch, payload) {
//   const requestOptions = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // ids of user2 active chats
//     body: JSON.stringify(payload),
//   };

//   try {
//     dispatch({ type: 'ADD_CHAT' });
//     // update user1 active chat list
//     let response = await fetch(`${DB_URL}/chat/${user1.id}`, requestOptions);
//     let data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// consider handling this on comp - may remove
// alternative is to have single update function
// export async function removeChat(dispatch, payload) {
//   const requestOptions = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // ids of user2 active chats
//     body: JSON.stringify(payload),
//   };

//   try {
//     dispatch({ type: 'REMOVE_CHAT' });
//     // update user1 active chat list
//     let response = await fetch(`${DB_URL}/chat/${user1.id}`, requestOptions);
//     let data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }
