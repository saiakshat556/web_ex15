import React, { useState } from 'react';

const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "I told my computer I needed a break, and now it won’t stop sending me KitKats.",
  "Why do programmers prefer dark mode? Because light attracts bugs!"
];

const Content = () => {
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(random);
  };

  return (
    <div>
      <button onClick={getJoke}>Tell me a joke</button>
      <p>{joke}</p>
    </div>
  );
};

export default Content;
