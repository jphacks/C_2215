import React from 'react';

class ClickItem extends React.Component {
    render() {
        var textData = ""
        function changeText(e) {
            textData = e.target.value
        }
        function btnClick() {
            alert(textData);
        }
        return (
            <div>
                {/* <h1>Hello World</h1> */}
                <input type="text" onChange={changeText} /><br />
                <button onClick={btnClick}>ボタン</button>
            </div>
        );
    }
}

export default ClickItem;
