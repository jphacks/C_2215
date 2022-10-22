import React from "react";

class OrderHeader extends React.Component {
    //   constructor(props) {
    //     super(props);
    //       this.state = { name: "にんじゃわんこ" };
    //   }

    //   addOrder() {
    //     this.setState({name: this.state.name + this.state.name});
    //   }

  render() {
    return (
      <div>
        <div className="order-index">{this.props.name}</div>
          {/* <button onClick={() => {this.addOrder()}}>追加</button> */}
      </div>
    );
  }
}
export default OrderHeader
