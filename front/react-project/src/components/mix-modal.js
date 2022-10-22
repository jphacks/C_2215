import React from "react";
import ModalBox from "./modal.js";

class fixModal extends React.Component {
  render(){
    const languageList = [
        {
            name: 'カルビ',
            image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/tanpin01.jpg',
            price: '400円'
        },
        {
            name: 'タン',
            image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/tanpin02.jpg',
            price: '500円'
        },
        {
            name: 'ロース',
            image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/tanpin03.jpg',
            price: '300円'
        },
        {
            name: 'ハラミ',
            image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/tanpin04.jpg',
            price: '400円'
        },
        {
            name: 'ホルモン',
            image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/tanpin07.jpg',
            price: '400円'
        },
        {
            name: 'レバー',
            image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/horumon02.jpg',
            price: '300円'
        },
        {
            name: '国産牛',
            image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/tanpin09.jpg',
            price: '700円'
        },
        {
            name: 'なんこつ',
            image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/tori02.jpg',
            price: '300円'
        },
        {
            name: 'イカ',
            image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/seafood02.jpg',
            price: '400円'
        },
        {
            name: '旨塩キャベツ',
            image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/salad05.jpg',
            price: '300円'
        },
        {
            name: 'ご飯',
            image: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic/img/menu/rice_noodles01.jpg?202203',
            price: '300円'
        },
      ];
    return(
        <div>
          {languageList.map((modalItem)=>{
            return (
            <div>
            <ModalBox
              name={modalItem.nam}
              price={modalItem.price}
              image={modalItem.image}
              />
            </div>
            )
            })}
</div>
    )
  }

}
