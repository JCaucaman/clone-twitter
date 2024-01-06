import { useState } from "react";

export function useCount(countNow, stateNow) {
  const [count, setCount] = useState(countNow);
  const [state, setState] = useState(stateNow);

  const changeCount = () => {
    if (state) {
      setCount(count - 1);
      setState(false);
    } else {
      setCount(count + 1);
      setState(true);
    }
  };

  return { count, state, changeCount };
}
