import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./layouts/navbarComponent";
import Dashbaord from "./Dashboard";
import partenaireComponent from "./layouts/partenaireComponent";


function App() {
  return (
    <Router>
      <NavBar />
        <Switch>
          <Route path="/" component={Dashbaord} exact />
          <Route path="/partenaires" exact component={partenaireComponent} />
        </Switch>
    </Router>
  )
}


export default App;
