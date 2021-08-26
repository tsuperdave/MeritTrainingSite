// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogInPage from "./pages/login";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import { AuthorizationProvider } from "./auth";


export default function App() {
  return (
  <AuthorizationProvider>
    <LogInPage />
  </AuthorizationProvider>     
  );
}

