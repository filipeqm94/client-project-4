//components
import { useEffect } from 'react';
import AppRoute from './Components/AppRoute';
import { useAuthDispatch, useAuthState } from './Context';
import axiosInstance from './Context/axios';
import { setUserChatList } from './Context/actions';

function App() {
  const { username } = useAuthState();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    axiosInstance
      .get(`getchatrooms/?username=${username}`)
      .then((res) => setUserChatList(dispatch, res.data))
      .catch(({ res }) => console.log(res));
  }, []);

  return (
    <>
      <AppRoute />
    </>
  );
}

export default App;
