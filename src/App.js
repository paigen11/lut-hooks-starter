import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useMemo,
} from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';
// import Counter from './Counter';

export const UserContext = createContext();

// useState can only be used in function based components
const App = () => {
  // the recipe for useState always
  // const [value, setValue] = useState(initialState);
  // replacing a lot of things you'd be using lifecycle methods for
  const [name, setName] = useTitleInput('');

  // way to reference a DOM node itself
  const ref = useRef();

  const reverseWord = word => {
    console.log('function called');
    return word
      .split('')
      .reverse()
      .join('');
  };

  const title = 'Level Up Dishes';

  // when you define what you want to it to re-run on,
  // the function won't rerender unless a specific thing it's watching changes
  const TitleReversed = useMemo(() => reverseWord(name), [name]);

  return (
    <UserContext.Provider value={{ user: true }}>
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add('new-fake-class')} x>
          {TitleReversed}
        </h1>
        <Toggle />
        {/* <Counter /> */}
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
    </UserContext.Provider>
  );
};

export default App;
