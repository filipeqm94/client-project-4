// third party
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//local
import axiosInstance from './Context/axios';
import { useAuthDispatch } from './Context';
import { setUsersList } from './Context/actions';
//components
import AppRoute from './Components/AppRoute';

function App() {
  const navigate = useNavigate();

  const dispatch = useAuthDispatch()

  // useEffect(() => {
  //   axiosInstance
  //     .get('test/')
  //     .then((res) => {
  //       if ('response' in res) throw res;
  //       console.log('<<<<< Auth Success >>>>>');
  //       setUsersList(dispatch, res.data)
  //     })
  //     .catch((error) => {
  //       console.log('<<<<< Auth Error >>>>>');
  //       localStorage.clear();
  //       navigate('/login');
  //     });
  // }, [navigate]);

  return (
    <>
      <AppRoute />
    </>
  );
}

export default App;
