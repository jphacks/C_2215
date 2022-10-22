import './App.css';
import './styl.css';
import OrderFooter from './components/order-footer.js'
import OrderHeader from './components/order-header.js';
import SubmitButton from './components/submit.js';
import ShopRogo from './components/shop-rogo.js';
import Occupancy from './components/occupancy.js';
import Data from './components/data.js';
import ItemOrder from './components/order-item.js';

function Routers() {
  const itemList = ["混ぜ技", "ノドグロ", "辛味噌", "つけ麺", "から揚げ"]
  return (
    <div>
      <div className='card-box'>
        <div card-list>
          <Data/>
        </div>
      </div>
      <div className='order-box'>
        <OrderHeader name="注文リスト" />
        {itemList.map((item) => {
          return (
            <ItemOrder name={item} />
          )
        })}
        <OrderFooter />
        <div className='card-shop'>
          <SubmitButton />
          <ShopRogo />
        </div>
        <Occupancy/>
      </div>
    </div>
  );
}
export default Routers;
