import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navigation from '../components/Navigation';
import DefaultLayout from '../layouts/DefaultLayout';
import Bilder from '../pages/Bilder';
import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';

const Routes = () => (
  <Router>
    <Navigation />
    <DefaultLayout>
      <Switch>
        <Redirect exact from="/home" to="/" />
        <Redirect exact from="/hjem" to="/" />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/bilder">
          <Bilder />
        </Route>
        <Route exact path="/*">
          <NoMatch />
        </Route>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
