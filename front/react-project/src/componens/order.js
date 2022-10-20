import React from "react";

class Order extends React.Component {
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
          <div className="order-index">注文カゴ</div>
          {/* <button onClick={() => {this.addOrder()}}>追加</button> */}
        </div>
    );
  }
}
export default Order
