import { useRoutes } from 'react-router-dom';
import routes from '../Config/routes';
import { useAuthState } from '../Context';

function AppRoute({ props }) {
  const routing = useRoutes(routes);
  return <>{routing}</>;
}

export default AppRoute;
