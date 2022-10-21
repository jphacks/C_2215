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
                    <p>{this.props.introduction}</p>
                </div>
                <button className='modal-close-btn'
                  onClick={() => this.handleClickClose()}
                >
                  とじる
                </button>
            </div>
          </div>
        );
    }
        return (
            <div className='card-box'>
                <div
                    onClick={() => { this.handleClickOrder() }}
                >
                    <p>aaa</p>
                    {/* <img src={this.props.image} /> */}
                </div>
                {modal}
            </div>
        );
    }
}

export default ModalBox;

// // import React, { useState } from "react";
// // import "./App.css";
// import Modal from "react-modal";

// // Modal.setAppElement("#root");

// class ModalBox extends React.Component() {
//     render(){
//       const [modalIsOpen, setIsOpen] = React.useState(false);
//       return (
//           <div className="App">
//               <button onClick={() => setIsOpen(true)}>Open Modal</button>
//               <Modal
//                   isOpen={modalIsOpen}
//                   onRequestClose={() => setIsOpen(false)}
//                   overlayClassName={{
//                       base: "overlay-base",
//                       afterOpen: "overlay-after",
//                       beforeClose: "overlay-before"
//                   }}
//                   className={{
//                       base: "content-base",
//                       afterOpen: "content-after",
//                       beforeClose: "content-before"
//                   }}
//                   closeTimeoutMS={500}
//               >
//                   <button onClick={() => setIsOpen(false)}>Close Modal</button>
//               </Modal>
//           </div>
//       );
//   }

// }
// export default ModalBox;



// // // // MyComponents.js
// // // import React, { useEffect, useCallback, useState } from 'react';


// // // // 子コンポーネント（モーダル）
// // // function Modal(props) {

// // //     return (
// // //         <div id="modal" className="modal" onClick={(event) => { event.stopPropagation() }}>
// // //             <div>
// // //                 <p>モーダル</p>
// // //                 <button onClick={props.onClick}>閉じるボタン</button>
// // //             </div>
// // //         </div>
// // //     )
// // // }


// // // // 親コンポーネント
// // // export default function Modal_FunctionComponent() {

// // //     const [isModalOpen, setIsModalOpen] = useState(false)

// // //     const closeModal = useCallback(() => {
// // //         setIsModalOpen(false)
// // //         document.removeEventListener('click', closeModal)
// // //     }, [])

// // //     useEffect(() => {
// // //         return () => {
// // //             document.removeEventListener('click', closeModal)
// // //         }
// // //     }, [closeModal])


// // //     function openModal(event) {
// // //         setIsModalOpen(true)
// // //         document.addEventListener('click', closeModal)
// // //         event.stopPropagation()
// // //     }


// // //     return (
// // //         <div className="modalpage">
// // //             <h2>関数コンポーネント</h2>
// // //             <button onClick={(event) => { openModal(event) }}>モーダルを開く</button>

// // //             {isModalOpen ? <Modal onClick={(event) => { closeModal(event) }} /> : ""}

// // //         </div>
// // //     );
// // // }
