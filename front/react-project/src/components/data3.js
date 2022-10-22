import React from 'react';
import OrderCard from './order-card';

class Data3 extends React.Component {
  render() {
    // 指定されたコードを貼り付けてください
    const languageList = [
      {
        name: '鶏唐揚げ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/gem04.jpg',
        price:'290円'
      },
      {
        name: 'フライドポテト',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/gem03.jpg',
        price:'290円'
      },
      {
        name: 'カリッとろたこ焼き',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/gem06.jpg',
        price:'290円'
      },
      {
        name: '枝豆',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/gem01.jpg?202203',
        price:'290円'
      },
      {
        name: '韓国のり',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/gem02.jpg?202203',
        price:'190円'
      },
      {
        name: 'ナムル盛合せ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/gem05.jpg?202203',
        price:'290円'
      },
      {
        name: 'もやしナムル',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/gem11.jpg',
        price:'190円'
      },
      {
        name: '石焼ビビンバ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles04.jpg',
        price:'490円'
      },
      {
        name: '石焼ガリバタライス',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles06.jpg',
        price:'490円'
      },
      {
        name: 'チーズ石焼キーマカレー',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles07.jpg',
        price:'590円'
      },
      {
        name: 'チーズの石焼リゾット',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles05.jpg?20211101',
        price:'590円'
      },
      {
        name: '野菜クッパ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles08.jpg?202203',
        price:'390円'
      },
      {
        name: 'ご飯',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles01.jpg?202203',
        price:'小190円 中290円'
      },
      {
        name: 'そぼろごはん',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles17.jpg',
        price:'290円'
      },
      {
        name: '韓国のり玉ごはん',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles02.jpg',
        price:'390円'
      },
      {
        name: 'お子様うどん',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles16.jpg',
        price:'290円'
      },
      {
        name: 'お子様カレー',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles14.jpg',
        price:'290円'
      },
      {
        name: 'お子様そぼろごはん',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles15.jpg?202203',
        price:'290円'
      },
      {
        name: 'ひとくち冷麺',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles10.jpg?202203',
        price:'290円'
      },
      {
        name: '冷しぶっかけうどん',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles11.jpg?202203',
        price:'290円'
      },
      {
        name: '冷しそうめん',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles12.jpg',
        price:'290円'
      },
      {
        name: 'ふわふわ玉子スープ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/soup01.jpg?202203',
        price:'290円'
      },
      {
        name: 'ワカメスープ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/soup02.jpg?202203',
        price:'290円'
      },
      {
        name: 'ワカ玉スープ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/soup05.jpg?202203',
        price:'290円'
      },
      {
        name: '野菜スープ',
        image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/soup03.jpg',
        price:'290円'
      },
    ];

    return (
      <div>
        <h1>メニュー（逸品・ご飯）</h1>
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

export default Data3;