import React from 'react';
import OrderCard from './order-card';

class Data2 extends React.Component {
  render() {
    // 指定されたコードを貼り付けてください
    const languageList = [
      {
        name: 'キムチ盛合せ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/kimchi01.jpg?202203',
        price:'350円'
      },
      {
        name: '白菜キムチ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/kimchi02.jpg',
        price:'290円'
      },
      {
        name: '大根キムチ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/kimchi03.jpg',
        price:'290円'
      },
      {
        name: 'きゅうりキムチ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/kimchi04.jpg',
        price:'290円'
      },
      {
        name: '旨塩キュウリ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/salad06.jpg?20211101',
        price:'290円'
      },
      {
        name: '旨塩キャベツ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/salad05.jpg',
        price:'300円'
      },
      {
        name: 'サンチュ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/sanchu01.jpg?202203',
        price:'290円'
      },
      {
        name: '焼野菜盛合せ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/vegetables02.jpg',
        price:'290円'
      },
      {
        name: 'キャベツ焼',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/vegetables03.jpg',
        price:'190円'
      },
      {
        name: 'ピーマン焼',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/vegetables04.jpg',
        price:'190円'
      },
      {
        name: 'たまねぎ焼',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/vegetables05.jpg',
        price:'190円'
      },
      {
        name: 'とうもろこし焼',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/vegetables06.jpg',
        price:'190円'
      },
      {
        name: '小蛸の味噌焼',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/seafood03.jpg',
        price:'390円'
      },
      {
        name: 'イカ焼',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/seafood02.jpg',
        price:'390円'
      },
      {
        name: 'じゃがバター焼',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/vegetables01.jpg',
        price:'290円'
      },
      {
        name: 'コーンバター焼',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/vegetables07.jpg',
        price:'290円'
      },
    ];

    return (
      <div>
        <h1>メニュー（海鮮・野菜）</h1>
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

export default Data2;