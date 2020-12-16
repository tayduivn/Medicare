import { AuthContext } from '@devblock/react-auth/dist/context';
import React from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authProvider } from 'src/providers/authProvider';
import useCommonStyles from 'src/themes/styles';
import { Spinner } from './components/spinner';
import { store } from './redux/store';
import AuthenticatedRoute from './routers/authenticatedRoute';
import { NotFoundRoute } from './routers/notFoundRoute';
import { RouteName } from './routers/routeName';
import UnauthenticatedRoute from './routers/unauthenticatedRoute';

const App = () => {
  const classes = useCommonStyles();

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ provider: authProvider }}>
        <Switch>
          {/* Put all public routes under this line */}
          <UnauthenticatedRoute exact path={RouteName.LOGIN} componentPath={'pages/login'} />

          <UnauthenticatedRoute exact path={RouteName.SIGN_UP} componentPath={'pages/signUp'} />

          {/* Put all authenticated routes under this line */}
          <AuthenticatedRoute exact path={RouteName.HOME} componentPath={'pages/home'} />

          <NotFoundRoute />
        </Switch>

        <ToastContainer className={classes.toastify} />
      </AuthContext.Provider>

      <Spinner />
    </Provider>
  );
};

export default App;
