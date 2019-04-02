import React, { useState } from 'react';

// useState can only be used in function based components
const App = () => {
  // the recipe for useState always
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <h3>{name}</h3>
      <input type="text" onChange={e => setName(e.target.value)} value={name} />
    </div>
  );
};

export default App;
