import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import GetFirebaseData from "./pages/GetFirebaseData";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route component={Error}></Route>
        <Route path='/GetFireBaseData' component={GetFirebaseData}></Route>
      </Switch>
    </>
  );
};

export default App;
