import React, { Component } from 'react';
import "./Modal.css";

class Modal extends Component {

  closeIt = ()=>{
    this.props.closeModal();
  }

    render() {
      if(this.props.image.id === undefined){
        return <div></div>
      }else{
        return (
          <div id="myModal" className="modal">
          <span className="close" onClick = {this.closeIt.bind(this)} >&times;</span>
          <img src={this.props.image.url} className="modal-content" alt={this.props.image.id}/>
          <div id="caption">
            <p><strong>Album Id:</strong> {this.props.image.id} </p>
            <p><strong>Title:</strong> {this.props.image.title} </p>
            <p><strong>Description:</strong> {this.props.image.description}</p>
          </div>
          </div>
        )
      }
      
    
    }
  }
  
export default Modal;