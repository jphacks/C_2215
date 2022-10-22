import React from "react";

class OrderFooter extends React.Component {
  render() {
    return (
        <div>
          <div className="order-index">{this.props.name}{this.props.item}品{this.props.price}円</div>
        </div>
    );
  }
}
export default OrderFooter
