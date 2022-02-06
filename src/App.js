//components
import { useEffect } from 'react';
import AppRoute from './Components/AppRoute';
import { useAuthState } from './Context';
import axiosInstance from './Context/axios';

function App() {
  const { username } = useAuthState();

  useEffect(() => {
    axiosInstance
      .get(`getchatrooms/?username=${username}`)
      .then(console.log)
      .catch(({ response }) => console.log(response));
  }, []);

  return (
    <>
      <AppRoute />
    </>
  );
}

export default App;
