import { Fragment } from "react";
import PrincipalPage from './components/PrincipalPage'
import Detail from './components/Detail'
import {Route, Switch} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PrincipalPage />
        </Route>
        <Route path="/starships/"> 
          <Detail />
        </Route>  
      </Switch>
    </Router>
  );
}

export default App;
