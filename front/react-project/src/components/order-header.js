import React from "react";

class OrderHeader extends React.Component {
  render() {
    return (
      <div>
        <div className="order-index">{this.props.name}</div>
      </div>
    );
  }
}
export default OrderHeader
