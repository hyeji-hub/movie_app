import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  
  state = {
    count: 0
  };

  Add = () => {
    this.setState( current => ({ count: current.count + 1 }));
  }

  Minus = () => {
    this.setState({ count: this.state.count - 1});
  }
  
  componentDidMount() {
    console.log("Component rendered");
  }

  componentDidUpdate() {
    console.log("I just Update");
  }

  render() {
    console.log("I'm rendering");
    return <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.Add}>Add</button>
      <button onClick={this.Minus}>Minus</button>
    </div>
  }
}

export default App;
