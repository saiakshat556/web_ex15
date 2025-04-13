import React from 'react';
import PropTypes from 'prop-types';

const Child = ({ msg }) => {
  return <h2>Validated Message: {msg}</h2>;
};

Child.propTypes = {
  msg: PropTypes.string.isRequired,
};

const Parent = () => {
  return (
    <div>
      <h1>Question 7</h1>
      <Child msg="Message from parent" />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default App;
