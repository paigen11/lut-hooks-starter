import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

// useState can only be used in function based components
const App = () => {
  // the recipe for useState always
  // const [value, setValue] = useState(initialState);
  // replacing a lot of things you'd be using lifecycle methods for

  const [name, setName] = useTitleInput('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
