import React, { useState, useRef } from 'react';

// Part (i) – useState
const FormState = () => {
  const [name, setN] = useState('');
  const [email, setE] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Form with useState</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setN(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setE(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

// Part (ii) – useRef
const FormRef = () => {
  const nRef = useRef();
  const eRef = useRef();
  const [out, setOut] = useState({ n: '', e: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setOut({
      n: nRef.current.value,
      e: eRef.current.value
    });
  };

  return (
    <div>
      <h2>Form with useRef</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nRef} />
        <br />
        <input type="email" placeholder="Email" ref={eRef} />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Name: {out.n}</p>
      <p>Email: {out.e}</p>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Question 12</h1>
      <FormState />
      <hr />
      <FormRef />
    </div>
  );
};

export default App;
