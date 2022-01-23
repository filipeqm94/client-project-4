// third party
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//local
import { AuthProvider } from './Context';
import axiosInstance from './Context/axios';
//components
import AppRoute from './Components/AppRoute';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance
      .get('test/')
      .then((res) => {
        if ('response' in res) throw res;
        console.log('<<<<< Auth Success >>>>>');
      })
      .catch((error) => {
        console.log('<<<<< Auth Error >>>>>');
        localStorage.clear();
        navigate('/login');
      });
  }, [navigate]);

  return (
    <AuthProvider>
      <AppRoute />
    </AuthProvider>
  );
}

export default App;
