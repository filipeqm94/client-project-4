//components imports
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Profile from '../Pages/Profile'

//routes array
    //define the path
    //component to be rendered
    //`isPrivate` routes are only accessable for users logged in
const routes = [
  {
    path: '/',
    component: Home,
    isPrivate: false,
  },
  {
    path: '/login',
    component: Login,
    isPrivate: false,
  },
  {
    path: '/signup',
    component: SignUp,
    isPrivate: false,
  },
  {
    path: '/profile/:id',
    component: Profile,
    isPrivate: true,
  },
]

export default routes
