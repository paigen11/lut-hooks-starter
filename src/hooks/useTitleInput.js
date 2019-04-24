import { useState, useEffect, useDebugValue } from 'react';

// hooks should always start with the word 'use'
function useTitleInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    document.title = value;
  });

  useDebugValue(value.length > 0 ? 'Full' : 'Empty');
  return [value, setValue];
}

export { useTitleInput };
