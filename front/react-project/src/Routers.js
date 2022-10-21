// import { useNavigate } from "react-router-dom"

// const Routers = () => {
//     const navigate = useNavigate()
//     return (
//         <div>
//             <p>注文画面</p>
//             <button onClick={() => navigate('/submit')}>注文画面へ</button>
//         </div>
//     )
// }
// export default Routers

import './componens/order.js'
import './App.css';
import './styl.css';
import Order from './componens/order.js';
import SubmitButton from './componens/submit.js';
import ShopRogo from './componens/shop-rogo.js';
import Occupancy from './componens/occupancy.js';
import Data from './componens/data.js';
import ItemOrder from './componens/order-item.js';

function Routers() {
  // const title = "Hello World!";
  // const numList = [1,2,3]
  // const textList = [{name: "予定", per: "現状"}]
  const itemList = ["混ぜ技", "ノドグロ", "辛味噌", "つけ麺", "から揚げ"]
  // const languageList = Data.languageList;

  return (
    <div>
      <div className='card-box'>
        <div card-list>
          <Data/>
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
export default Routers;