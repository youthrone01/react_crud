import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from "./../component/Home";
import New from "./../component/New";
import Edit from "./../component/Edit";
import NotFoundPage from "./../component/NotFoundPage";
const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/new" component={New} />
          <Route path="/edit/:id/:name" component ={Edit} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );

  export default AppRouter;