import React from "react";

class OrderCard extends React.Component {
  render() {
    return (
        <div className='language-item'>
          <div className='language-name'>{this.props.name}</div>
          <div className='language-price'>{this.props.price}</div>
          <img 
          className='header-logo-img' 
          src={this.props.image} alt=""
          />
        </div>
    )
  }
}
export default OrderCard;
