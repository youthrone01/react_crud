import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import { BrowserRouter, Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Table from "./Table";

class Home extends Component {

    render() {
        
        return (
          <div className="row col-lg-12">        
            <Header />
            <div className="row col-lg-12"><Link to="/new">Add an author</Link></div>
            <h3 className="row col-lg-12">We have quotes by: </h3>
            <Table />
          </div>
        );
      }
}

export default Home;