import { useEffect } from 'react';
import AppRoute from './Components/AppRoute';
import { AuthProvider } from './Context';
const axios = require('axios');

function App() {
  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_DB_URL + 'objects/')
  //     .then(console.log)
  //     .catch(console.error);
  // }, []);

  return (
    <AuthProvider>
      <AppRoute />
    </AuthProvider>
  );
}

export default App;
