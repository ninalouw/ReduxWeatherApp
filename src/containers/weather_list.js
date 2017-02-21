import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}

//In ES6 we can write it as:
function mapStateToProps({ weather }){
// the argument we are passing in is state, but if we are only
//taking off one prop ('weather'), we can just pass in {weather},
//which is the same as defining const weather = state.weather
//now we have {weather: weather}
//when we have a key and value that are completeley identical we can just write {weather}
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
