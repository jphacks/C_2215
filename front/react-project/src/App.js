import './componens/order-footer.js'
import './App.css';
import './styl.css';
import SubmitButton from './componens/submit.js';
import ShopRogo from './componens/shop-rogo.js';
import Occupancy from './componens/occupancy.js';
import OrderCard from './componens/order-card';
import ItemOrder from './componens/order-item.js';
import OrderHeader from './componens/order-header.js';
import OrderFooter from './componens/order-footer.js';
// import Modal from './componens/modal.js';

function App() {
  const itemList = ["混ぜ技", "ノドグロ", "辛味噌", "つけ麺", "から揚げ"]

  return (
    <div>
      <div className='card-box'>
        <div>
          <OrderCard name="test" price="100"/>
          <OrderCard name="ラーメン" price="777777" />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
      </div>
      <div className='order-box'>
        <OrderHeader name="注文リスト" />
        {itemList.map((item) => {
          return (
            <ItemOrder name={item} />
          )
        })}
        <OrderFooter name="合計 " item={itemList.length} price="000" />
        <div className='card-shop'>
          <SubmitButton />
          <ShopRogo/>
        </div>
        <Occupancy/>
      </div>
    </div>
    // <div card-list>
    //   <div>
    //     {/* <MixBox></MixBox> */}
    //     {/* <Meter /> */}
    //     <LinkButton />
    //     <LinkButton />
    //     <LinkButton />
    //     <LinkButton />
    //     <LinkButton />
    //     <LinkButton />
    //     <LinkButton />
    //     <LinkButton />
    //     <LinkButton />
    //     <LinkButton />
    //   </div>
    // </div>
    // // <div className="App">
    // //   <div className='container'>
    //     {/* <div className='sort'>
    //       <div className='example4'>
    //         {textList.map((text) => {
    //           return (
    //             <Meter
    //             />
    //           )
    //         })}
    //       </div> */}
    //       {/* <h1>{title}</h1>

    //       <div className='circle'>{numList}
    //         {numList.map((num)=>{
    //             return <p>{num}</p>
    //           })}
    //         </div>
    //         <LinkButton text="ボタン" link="/test" />
    //         <div className='card'> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;






// import logo from './logo.svg';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
