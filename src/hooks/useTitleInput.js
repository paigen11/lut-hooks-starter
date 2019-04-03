import { useState, useEffect } from 'react';

// hooks should always start with the word 'use'
function useTitleInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    document.title = value;
  });
  return [value, setValue];
}

export { useTitleInput };
