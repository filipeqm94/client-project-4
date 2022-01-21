//components imports
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Profile from '../Pages/Profile';

//routes array
//define the path
//component to be rendered
//`isPrivate` routes are only accessable for users logged in
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/profile/:id',
    element: <Profile />,
  },
];

export default routes;
