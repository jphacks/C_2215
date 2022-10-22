import React from 'react';
import OrderCard from './order-card';

class Data4 extends React.Component {
  render() {
    // 指定されたコードを貼り付けてください
    const languageList = [
      {
        name: 'やわらか杏仁豆腐',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/dessert01.jpg',
        price:'150円'
      },
      {
        name: 'フルーツゼリー',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/dessert11.jpg?20211101',
        price:'150円'
      },
      {
        name: 'バニラソフト',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/dessert04.jpg',
        price:'190円'
      },
      {
        name: 'チョコバニラソフト',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/dessert05.jpg',
        price:'200円'
      },
      {
        name: 'ストロベリーバニラ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/dessert06.jpg',
        price:'200円'
      },
      {
        name: 'バニラシューアイス',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/dessert08.jpg',
        price:'190円'
      },
      {
        name: '抹茶シューアイス',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/dessert09.jpg',
        price:'190円'
      },
    ];

    return (
      <div>
        <h1>メニュー（デザート）</h1>
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

export default Data4;