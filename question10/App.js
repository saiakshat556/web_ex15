import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef Example</h2>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Question10</h1>
      <FocusInput />
    </div>
  );
};

export default App;

