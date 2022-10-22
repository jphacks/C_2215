import React from "react";
class ModalBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }
    handleClickOrder() {
      this.setState({ isModalOpen: true });
    }

    handleClickClose() {
      this.setState({ isModalOpen: false });
    }
  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
            <div className='modal-inner'>
              <div className='modal-header'></div>
                <div className='modal-introduction'>
                  <h2>{this.props.name}</h2>
                    <p>{this.props.price}</p>
                </div>
                <div className="btn-com">
                <button className='modal-close-btn'
                  onClick={() => this.handleClickClose()}
                >
                  とじる
                </button>
                  <button className="modal-add-btn">+</button>
                  <button className="modal-rm-btn">-</button>
                </div>
            </div>
          </div>
        );
    }
        return (
          <div>
            <div onClick={() => { this.handleClickOrder() }} >
              <div className='modal-box'>
                <p>注文する</p>
              </div>
            </div>
            {modal}
          </div>
        );
    }
}
export default ModalBox;
