import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Display from "./foodApp/Display";
import HeaderV from "./foodApp/HeaderV";
import Input from "./foodApp/Input";

const app = () => {
  return (
    <BrowserRouter>
      <HeaderV />
      <Switch>
        <Route exact path="/" component={Display} />
        <Route exact path="/input" component={Input} />
      </Switch>
    </BrowserRouter>
  );
};

export default app;
