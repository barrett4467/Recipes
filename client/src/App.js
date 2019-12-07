import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddRecipe from "./components/AddRecipe";
import ViewRecipe from "./components/ViewRecipe";
import NoMatch from "./components/NoMatch";


function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/view"} component={ViewRecipe}/>
          <Route exact path={"/add"} component={AddRecipe}/>
          <Route component={NoMatch}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;
