// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogInPage from "./pages/login";
import AlumniPage from './pages/alumni';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import { AuthorizationProvider } from "./auth";
import { Switch, Route, Router } from './customRouter';
import { Redirect } from 'react-router'


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
  </AuthorizationProvider>     
  );
}

