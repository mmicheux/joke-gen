import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Joke from "./components/Joke";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      joke: {}
    };
    this.fetchJoke = this.fetchJoke.bind(this);
  }

  componentDidMount(){
    this.fetchJoke();
  }

  fetchJoke(){
    axios.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke')
      .then(res => {
        this.setState({
          joke: res.data
        });
      });
  }
  render() {
    return (
      <Joke joke={this.state.joke} fetchJoke={this.fetchJoke}/>
    );
  }
}

export default App;
