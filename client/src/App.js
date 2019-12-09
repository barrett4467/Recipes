import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import ViewRecipe from "./pages/ViewRecipe";
import NoMatch from "./pages/NoMatch";
import Tester from "./pages/Tester";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path={"/"} component={Tester}/>
          <Route exact path={"/view"} component={ViewRecipe}/>
          <Route exact path={"/add"} component={Tester}/>
          <Route exact path={"/api/recipes"} />
          <Route component={NoMatch}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;
