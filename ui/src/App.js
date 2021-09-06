// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogInPage from "./pages/login";
import AlumniPage from './pages/alumni';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import { AuthorizationProvider } from "./auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect }from 'react-router'


export default function App() {
  return (
  <AuthorizationProvider>
    <Router>
      <Switch>
        <Route exact path='/' component={LogInPage}>
          <Redirect to='/login' />
        </Route>
        <Route exact path='/login' component={LogInPage} />
        <Route exact path='/alumni' component={AlumniPage} />
      </Switch>
    </Router>
    <LogInPage />
  </AuthorizationProvider>     
  );
}

