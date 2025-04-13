import React, { useState, createContext, useContext } from 'react';

const ThemeCtx = createContext();

const Box = () => {
  const t = useContext(ThemeCtx);

  const style = {
    backgroundColor: t === 'dark' ? '#222' : '#eee',
    color: t === 'dark' ? '#fff' : '#000',
    padding: '20px',
    marginTop: '20px'
  };

  return (
    <div style={style}>
      <p>This is {t} mode</p>
    </div>
  );
};

const App = () => {
  const [t, setT] = useState('light');

  const toggle = () => {
    setT(t === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeCtx.Provider value={t}>
      <div style={{ padding: '20px' }}>
        <h1>Question 11</h1>
        <button onClick={toggle}>Toggle Theme</button>
        <Box />
      </div>
    </ThemeCtx.Provider>
  );
};

export default App;
