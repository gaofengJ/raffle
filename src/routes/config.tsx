import { HashRouter as Router, Route, withRouter } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import routes from './route';

const MainRouter = withRouter(({ location }) => {
  return (
    <CacheSwitch location={location}>
      {routes.map((route, index: number) => {
        return route.isCache ? (
          <CacheRoute
            cacheKey={route.path}
            key={index}
            path={route.path}
            exact
            render={(props: any) => <route.Component {...props} />}
          />
        ) : (
          <Route
            key={index}
            path={route.path}
            exact
            render={(props: any) => <route.Component {...props} />}
          />
        );
      })}
    </CacheSwitch>
  );
});

const RouterConfig = (props: any) => {
  return (
    <Router basename='/random-order'>
      <MainRouter />
    </Router>
  );
};

export default RouterConfig;
