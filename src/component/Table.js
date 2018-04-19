import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import http from "./../api/http";
import { connect} from 'react-redux';
import { getAuthors,delAuthors, sortAuthorA,sortAuthorD, search_authors } from './../actions/action';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Router, Route, Switch, Link, NavLink } from 'react-router-dom';

class Table extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        http.getALL()
        .then(function(res){
            this.props.actions.getAuthors(res.data);
            this.all_author = res.data;
            return null;
        }.bind(this))
        .catch(function(err){
            console.log('error: ', err);
        })
      }

      deleteAuthor = (id)=>{
          http.delAuthor(id)
          .then((res) => {
            this.props.actions.getAuthors(res.data);
            return null;
          })
          .catch(function(err){
            console.log('error: ', err);
          })
        }

      createRow = (props) =>{         
          return props.authors.map((author)=>(
            <tr key={author._id}>
                <td>{author.name}</td>
                <td>
                    <Link to={`/edit/${author._id}/${author.name}`}><button className="btn-info">Edit author</button></Link>
                    <button className="btn-danger" onClick={this.deleteAuthor.bind(this, author._id)}>Delete</button>
                </td>
            </tr>
          ));
      }

      sortAuthors_ascending = ()=>{        
        this.props.actions.sortAuthorA(this.props.authors);
      }

      sortAuthors_descending = ()=>{        
        this.props.actions.sortAuthorD(this.props.authors);
      }
      search_authors = (e)=>{
        const keyword = e.target.value;        
        this.props.actions.search_authors(keyword,this.all_author);
      }

    render() {
        const row = this.createRow(this.props);
        return (                 
            <table className="table table-bordered">
                <tbody>
                <tr>
                    <th>Author 
                        <button onClick={this.sortAuthors_ascending.bind(this)} >sort ↑</button>
                        <button onClick={this.sortAuthors_descending.bind(this)} >sort ↓</button>
                        <input onChange={this.search_authors} placeholder="Search by Key words" />
                    </th>
                    <th>Action available</th>
                </tr>
                {row}
                </tbody>
            </table>
          
        );
      }
}

function mapStateToProps(state){
    return {
        authors: state.authors
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators({
            getAuthors:getAuthors,
            delAuthors:delAuthors,
            sortAuthorD:sortAuthorD,
            sortAuthorA:sortAuthorA,
            search_authors:search_authors
          },dispatch)
    }
}

Table = connect(mapStateToProps,mapDispatchToProps)(Table);

export default Table;