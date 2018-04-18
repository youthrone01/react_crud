import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Table extends Component {

    render() {
        
        return (                 
            <table className="table table-bordered">
                <tbody>
                <tr>
                    <th>Author</th>
                    <th>Action available</th>
                </tr>
                <tr>
                    <td>Author</td>
                    <td>Action available</td>
                </tr>
                </tbody>
            </table>
          
        );
      }
}

export default Table;