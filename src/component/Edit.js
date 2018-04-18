import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import { BrowserRouter, Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Table from "./Table";
import AuthorForm from "./AuthorForm";

class Edit extends Component {

    render() {
        
        return (
          <div className="row col-lg-12">        
            <Header />
            <div className="row col-lg-12"><Link to="/">Go Home</Link></div>
            <h3 className="row col-lg-12">You want to edit: </h3>
            <AuthorForm {...this.props} name={this.props.match.params.name} authorid={this.props.match.params.id}/>
          </div>
        );
      }
}

export default Edit;