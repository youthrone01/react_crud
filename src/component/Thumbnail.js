import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Thumbnails extends Component {
    handleClick = (id) => {
        this.props.clickIt(id);
    }

    display_thumbnails = (props) =>{
      return props.images.map((img) =>(
        <img key={img.id} 
            src={img.thumbnailUrl}
            alt={"image_id:"+img.id} 
            className="img-thumbnail ml-4"
            onClick = {this.handleClick.bind(this, img.id)}
         />
      )
    )
    }

  render() {
    const thumbnails = this.display_thumbnails(this.props)
    return (
      <div className="row">        
        {thumbnails}
      </div>
    );
  }
}

export default Thumbnails;