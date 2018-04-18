import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import http from "./../api/http";

class AuthorForm extends Component {
    
        constructor(props) {
          super(props);
          this.state = {
            name: "",
            error: false,
            length: false,
          }
        }

        componentWillMount(){
          if(this.props.name){
            this.setState(()=>({
              name: this.props.name
            }))
          }
        }
        onSubmit = (e) => {
          e.preventDefault();
          //console.log(this.props);
          if(!this.state.name) {
            this.setState(() => ({
              error: true
            }))
          }else if(this.state.name.length < 3){
            this.setState(() => ({
                length: true
              }))
          }else {
            this.setState(() => ({
              error: false,
              length: false
            }))
            
            if(this.props.authorid && this.props.name){              
              this.updateAuthor(this.props.authorid,this.state.name);
            }else{
              this.createAuthor();
            }
          }
        };

        createAuthor = ()=>{
          http.addAuthor(this.state.name)
                .then(function (response) {
                    if(response.data == "Success!"){
                        this.setState(() => ({
                            name: ""
                          }));
                          this.props.history.push('/'); 
                          return null 
                    }                                      
                }.bind(this))
                .catch(function (error) {
                    console.log('error: ', error);                    
                });
        }

        updateAuthor = (id, name)=>{
          http.updateAuthor(id,name)
                .then(function (response) {
                    if(response.data == "Success!"){
                        this.setState(() => ({
                            name: ""
                          }));
                          this.props.history.push('/'); 
                          return null 
                    }                                      
                }.bind(this))
                .catch(function (error) {
                    console.log('error: ', error);                    
                });
        }
      
        onNameChange = (e) => {
          const name = e.target.value;
          // console.log(e.value)
          this.setState(() => ({name}));
        }
    render() {
        
        return (
        <div>
          <form onSubmit={this.onSubmit}>
                {this.state.error && <p>Author's name is required.</p >}
                {this.state.length && <p>Author's name must be at least 3 characters.</p >}
              <label>Name:</label>
                <input 
                    type="text"
                    name="author"
                    placeholder="Name"
                    value = {this.state.name}
                    autoFocus
                    onChange = {this.onNameChange}
                />
                <button>Submit</button>
            </form>
        </div>
        );
      }
}

export default AuthorForm;