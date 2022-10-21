import React from "react";
import ModalBox from "./modal.js";
// import Modal from "./modal.js";

class OrderCard extends React.Component {
  render() {
    return (
        <div className='language-item'>
            <ModalBox/>
          <div className='language-name'>{this.props.name}</div>
          <div className='language-price'>{this.props.price}円</div>
        </div>
    )
  }
}
export default OrderCard;
