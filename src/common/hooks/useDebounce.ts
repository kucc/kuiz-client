import { useState, useEffect } from "react";
const useDebounce = (state: string, delay: number): string => {
  const [debouncedState, setDebouncedState] = useState(state);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedState(state);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [state, delay]);
  return debouncedState;
};

export default useDebounce;
