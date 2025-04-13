import React from 'react';

// Child Component
const Child = ({ message }) => {
  return <h2>Message from Parent: {message}</h2>;
};

// Parent Component
const Parent = () => {
  const msg = "Prop message from parent to child!";
  return (
    <div>
      <h1>Parent Component</h1>
      <Child message={msg} />
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default App;

