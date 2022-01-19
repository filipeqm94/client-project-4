import { useRoutes, Route } from 'react-router-dom';
import routes from '../Config/routes';
import { useAuthState } from '../Context';
import { Redirect } from 'react-router-dom';

function AppRoute(props) {
  const currentUser = useAuthState();
  const routing = useRoutes(routes);

  return <>{routing}</>;
}

export default AppRoute;
