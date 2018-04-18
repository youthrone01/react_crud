import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import http from "./../api/http";
import { connect} from 'react-redux';
import { getAuthors,delAuthors,closeImage, sortAuthor } from './../actions/action';
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
                    <button className="btn btn-info"><Link to={`/edit/${author._id}/${author.name}`}>Edit author</Link></button>
                    <button onClick={this.deleteAuthor.bind(this, author._id)}>Delete</button>
                </td>
            </tr>
          ));
      }

      sortAuthors = ()=>{        
        this.props.actions.sortAuthor(this.props.authors);
      }


    render() {
        const row = this.createRow(this.props);
        return (                 
            <table className="table table-bordered">
                <tbody>
                <tr>
                    <th>Author <button onClick={this.sortAuthors.bind(this)} >sort</button></th>
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
            closeImage:closeImage,
            sortAuthor:sortAuthor
          },dispatch)
    }
}

Table = connect(mapStateToProps,mapDispatchToProps)(Table);

export default Table;