import React from 'react';
import Item from './item';

class Choose extends React.Component {
  render() {
    return (
      <div>
        <div className="choose">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}

export default Choose;