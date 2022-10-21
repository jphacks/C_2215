import React, {useEffect} from "react";
import axios from "axios";
import './App.css';
import Meter from './Meter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL:'http://geoapi.heartrails.com/api/json?method=searchByPostal&postal=0010010', //localhostのリンクに変えて欲しい
      ary:[]
      };
  }

    componentDidMount() {
      axios.get(this.state.baseURL).then((response) => {
        this.setState({
          //ary:response.data
          ary:88
        })
        console.log(this.state.ary);
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
      }
    ]
  return (
    <div className="App">
      <header className="App-header">
      <div class="container">
        <Meter 
          id = {1}
          percent = {this.state.ary}
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
