import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({term: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
    //Here need to fetch the weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render (){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        placeholder="Get a five-day forecast in your favourite cities"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Submit</button>
        </span>
      </form>
    )

  }
}

function mapDispatchToProps(dispatch) {
  // this makes sure that when fetchWeather() is called and returns an action, // bind action creators with dispatch and make sure that that action flows // down into middleware and then reducers in our redux app.
  return bindActionCreators({fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
