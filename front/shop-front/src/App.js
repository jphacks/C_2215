import React, {useEffect} from "react";
import axios from "axios";
import './App.css';
import Meter from './Meter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL:'http://localhost:8080/items', //localhostのリンクに変えて欲しい
      items:[]
      //ary:[],
      //str:""
      };
  }

    componentDidMount() {
      axios.get(this.state.baseURL).then((response) => {
        this.setState({
          items:response.data
          //str:this.state.ary.join()
          //ary:88
        }
        )
        console.log(this.state.items);
      })
    };

  render(){

    const groopList = [
      {
        id:'2',
        percent:'77'
      },
      {
        id:'3',
        percent:'90'
      },
      {
        id:'4',
        percent:'66'
      },
      {
        id:'5',
        percent:'76'
      },
      {
        id:'6',
        percent:'30'
      },
      {
        id:'7',
        percent:'20'
      },
      {
        id:'8',
        percent:'90'
      },
      {
        id:'9',
        percent:'55'
      },
      {
        id:'10',
        percent:'20'
      },
      {
        id:'11',
        percent:'89'
      },
      {
        id:'12',
        percent:'44'
      }
    ]
  return (
    <div className="App">
      <header className="App-header">
      <div class="container">
        <Meter 
          id = {1}
          percent = {this.state.items.photo_per}
        />
      {groopList.map((groopItem) => {
        return(
          <Meter 
            id = {groopItem.id}
            percent = {groopItem.percent}
          />
        )
      })}
      </div>
      </header>
    </div>
  );
  }
}

export default App;
