import { Component } from 'react';

const ClassBased = class extends Component {
  constructor(props) {
    super();
    
    this.state = {
      counter: 0,
      internalValue: props.value * 2,
      newKeyValuePair: false,
      days: [],
      interviewers: {},
      interval: null
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

  // data fetching, setting up timers, setting up socket connections
  componentDidMount() {
    console.log('the component has mounted to the dom');

    const interval = setInterval(() => {
      console.log('interval has fired');
    }, 3000);

    this.setState({ interval });
  }

  // listen for changes to the data
  componentDidUpdate(prevState, prevProps) {
    console.log('component has updated');
  }

  // fires once, used for clean up
  componentWillUnmount() {
    console.log('component will be unmounted from the dom');

    clearInterval(this.state.interval);
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
