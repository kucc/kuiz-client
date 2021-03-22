import { Dispatch, SetStateAction, useState } from "react";

const useToggle = (
  defaultToggle?: boolean
): [boolean, Dispatch<SetStateAction<boolean>>, () => void] => {
  const [state, setState] = useState(defaultToggle ? defaultToggle : false);

  const toggle = () => {
    setState(!state);
  };

  return [state, setState, toggle];
};

export default useToggle;
