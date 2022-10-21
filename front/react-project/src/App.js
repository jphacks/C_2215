import './componens/order.js'
import './App.css';
import './styl.css';
import Order from './componens/order.js';
import SubmitButton from './componens/submit.js';
import ShopRogo from './componens/shop-rogo.js';
import Occupancy from './componens/occupancy.js';
import OrderCard from './componens/link_button';
import ItemOrder from './componens/order-item.js';

function App() {
  // const title = "Hello World!";
  // const numList = [1,2,3]
  // const textList = [{name: "予定", per: "現状"}]
  const itemList = ["混ぜ技", "ノドグロ", "辛味噌", "つけ麺", "から揚げ"]

  return (
    <div>
      <div className='card-box'>
        <div card-list>
          {/* <MixBox></MixBox> */}
          {/* <Meter /> */}
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
        <Order />
        {itemList.map((item) => {
          return (
            <ItemOrder name={item} />
          )
        })}
        <div className='card-shop'>
          <SubmitButton />
          <ShopRogo/>
        </div>
        <Occupancy/>
      </div>
    </div>
  );
}
export default App;
