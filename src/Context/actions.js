const DB_URL = process.env.REACT_APP_DB_URL;

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

export async function getUserChats(dispatch, payload) {
  try {
    let response = await fetch(`${DB_URL}`);
    let data = await response.json();
    dispatch({ type: 'GET_USER_CHATS', payload: data });
  } catch (error) {
    console.error(error);
  }
}

export async function createChat(dispatch, payload) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // ids of user2 active chats
    body: JSON.stringify(payload),
  };

  try {
    dispatch({ type: 'CREATE_CHAT' });
    // update user1 active chat list
    let response = await fetch(`${DB_URL}/chat/${user1.id}`, requestOptions);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
