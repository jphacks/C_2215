import React from 'react';
import './Meter.css';

class Meter extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
        return(
            <div id="pie-chart" class="content">
                <div class="pie-chart-wrap">
                <div class="box">
                <p class="text">desk {this.props.id}</p>
                    <div class="percent">
                    <svg>
                        <circle class="base" cx="75" cy="75" r="70"></circle>
                        <circle class="line" cx="75" cy="75" r="70"></circle>
                    </svg>
                    <div class="number">
                        <h3 class="title">{this.props.percent}<span>%</span></h3>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
export default Meter;