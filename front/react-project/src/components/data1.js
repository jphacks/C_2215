import React from 'react';
import OrderCard from './order-card';

class Data1 extends React.Component {
  render() {
    // 指定されたコードを貼り付けてください
    const languageList = [
      {
        name: '炙り牛カルビ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/karubi01.jpg',
        price:'380円'
      },
      {
        name: 'カルビ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/karubi02.jpg?20211101',
        price:'380円'
      },
      {
        name: '炙りロース',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rosu01.jpg',
        price:'380円'
      },
      {
        name: 'ロース',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rosu02.jpg',
        price:'480円'
      },
      {
        name: 'やみつきハラミ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/harami04.jpg',
        price:'390円'
      },
      {
        name: 'やわらかホルモン',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/horumon01.jpg',
        price:'280円'
      },
      {
        name: '牛レバー',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/horumon02.jpg',
        price:'280円'
      },
      {
        name: '厚切り豚カルビ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/buta01.jpg',
        price:'390円'
      },
      {
        name: 'タン',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/tanpin02.jpg',
        price:'500円'
      },
      {
        name: 'ソーセージ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/buta03.jpg',
        price:'290円'
      },
      {
        name: '鶏カルビ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/tori01.jpg',
        price:'290円'
      },
      {
        name: '鶏なんこつ焼',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/tori02.jpg',
        price:'290円'
      },
      {
        name: '鳥皮焼',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/tori03.jpg?20211101',
        price:'290円'
      },
      {
        name: '熟成三元豚',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/sukiyaki03.jpg',
        price:'400円'
      },
      {
        name: '炎の厚切り豚カルビ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/umakara01.jpg',
        price:'290円'
      },
      {
        name: '炎のやわらかホルモン',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/umakara04.jpg',
        price:'390円'
      },
      {
        name: '炎の鶏カルビ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/umakara03.jpg',
        price:'290円'
      },
    ];

    return (
      <div>
        <h1>メニュー（肉）</h1>
        <div>
            {languageList.map((languageItem) => {
                return (
                  // Languageコンポーネントを呼び出し、その中でpropsを渡してください
                  <OrderCard
                  name={languageItem.name}
                  image={languageItem.image}
                  price={languageItem.price}
                  />
                )
            })}
        </div>
      </div>
    );
  }
}

export default Data1;