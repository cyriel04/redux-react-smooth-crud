import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import Crud from "./containers/Crud";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Crud} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
