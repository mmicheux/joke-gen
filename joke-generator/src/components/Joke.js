import React, { Component } from "react";

class Joke extends Component {
  constructor(props){
    super(props);
    this.state = {
      shouldShowPunchline : false
    }
    this.showJoke = this.showJoke.bind(this);
    this.fetchAnotherJoke = this.fetchAnotherJoke.bind(this);

  }
  showJoke(){
    this.setState({
      shouldShowPunchline : true
    });
  }
  fetchAnotherJoke(){
    this.setState({
      shouldShowPunchline : false
    });
    this.props.fetchJoke();
  }
  render(){
    const punchlineHidden = (
      <button onClick={this.showJoke}>SHOW ME</button>
    );
    const punchlineShown = (
      <div>
        <h2>{this.props.joke.punchline}</h2>
        <button onClick={this.fetchAnotherJoke}>ANOTHER!</button>
      </div>
    );

    return (
      <div>
        <h1>{this.props.joke.setup}</h1>
        {this.state.shouldShowPunchline ? 
        punchlineShown : 
        punchlineHidden}
      </div>
    );

  }
}

export default Joke;