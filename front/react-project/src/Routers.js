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

import './App.css';
import './styl.css';
import SubmitButton from './components/submit.js';
import ShopRogo from './components/shop-rogo.js';
import Occupancy from './components/occupancy.js';
import Data1 from './components/data1.js';
import Data2 from './components/data2.js';
import Data3 from './components/data3.js';
import Data4 from './components/data4.js';
import ItemOrder from './components/order-item.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Routers() {
  // const title = "Hello World!";
  // const numList = [1,2,3]
  // const textList = [{name: "予定", per: "現状"}]
  const itemList = ["混ぜ技", "ノドグロ", "辛味噌", "つけ麺", "から揚げ"]
  // const languageList = Data.languageList;

  return (
    <div>
      <div className='card-box'>
        <Tabs>
          <TabList>
            <Tab>肉</Tab>
            <Tab>海鮮・野菜</Tab>
            <Tab>逸品・ご飯</Tab>
            <Tab>デザート</Tab>
          </TabList>

          <TabPanel>
            <div card-list>
              <Data1/>
            </div>
          </TabPanel>
          <TabPanel>
            <div card-list>
              <Data2/>
            </div>
          </TabPanel>
          <TabPanel>
            <div card-list>
              <Data3/>
            </div>
          </TabPanel>
          <TabPanel>
            <div card-list>
              <Data4/>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div className='order-box'>
        {/* <OrderCard /> */}
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