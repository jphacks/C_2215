import React from 'react';

class Item extends React.Component {
    render(){
        return (
            <div className='item-item'>
                <div className='item-name'>HTML & CSS</div>
                <img className='language-image' src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg' />
            </div>
        );
    }
}

export default Item;