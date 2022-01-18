import { useRoutes, Route, Routes, Outlet } from 'react-router';
import routes from '../Config/routes';

function AppRoute(props) {
  const routing = useRoutes(routes);

  return <>{routing}</>;
}

export default AppRoute;
