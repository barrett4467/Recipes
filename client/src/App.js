import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddRecipe from "./components/AddRecipe";
import ViewRecipes from "./components/ViewRecipes";


function App() {
  return (
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route exact path="/"></Route>
    //       <Route component={NoMatch}></Route>
    //     </Switch>
    //   </div>
    // </Router>
    <ViewRecipes/>
  )
}

export default App;
