import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails } from './redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './common/Header';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //API call to fetch movie details from json
    this.props.fetchMovieDetails();
  }
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetails: () => dispatch(fetchMovieDetails())
  }
}
export default connect(null, mapDispatchToProps)(App);