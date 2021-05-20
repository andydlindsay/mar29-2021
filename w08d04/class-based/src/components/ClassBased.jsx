import { Component } from 'react';

const ClassBased = class extends Component {
  constructor(props) {
    super();
    
    this.state = {
      counter: 0,
      internalValue: props.value * 2,
      newKeyValuePair: false,
      days: [],
      interviewers: {}
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    // DO NOT DO THIS vvv
    // this.state.counter = this.state.counter + 1;

    this.setState({
      counter: this.state.counter + 1,
      newKeyValuePair: !this.state.newKeyValuePair
    });
  }

  render() {
    return (
      <div>
        <h2>I am a class-based component</h2>
        <h2>{this.props.message}</h2>

        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
};

export default ClassBased;

// const classBased = new ClassBased(props);
// classBased.props = props;

// console.log()
