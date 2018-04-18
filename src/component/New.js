import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import { BrowserRouter, Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import AuthorForm from "./AuthorForm";

class New extends Component {

    render() {
        
        return (
          <div className="row col-lg-12">        
            <Header />
            <div className="row col-lg-12"><Link to="/">Go Home</Link></div>
            <h3 className="row col-lg-12">Add a new author: </h3>
            <AuthorForm {...this.props}/>
          </div>
        );
      }
}

export default New;