import React, { Component, useState } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Component Did Update');
    }
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

const App = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <h1>Lifecycle Methods Demo</h1>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Unmount Component' : 'Mount Component'}
      </button>

      {showComponent && <LifecycleDemo />}
    </div>
  );
};

export default App;
