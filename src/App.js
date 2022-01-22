import { useEffect } from 'react';
import AppRoute from './Components/AppRoute';
import { AuthProvider } from './Context';

function App() {
  return (
    <AuthProvider>
      <AppRoute />
    </AuthProvider>
  );
}

export default App;
