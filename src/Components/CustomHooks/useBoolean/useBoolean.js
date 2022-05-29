import { useState } from "react";

export default function useBoolean(initialState = false) {
  const [isToggle, setToggle] = useState(initialState);
  const handleToggle = () => {
    setToggle(!isToggle);
  };
  const handleFalse = () => {
    setToggle(false);
  };
  const handleTrue = () => {
    setToggle(true);
  };
  return [isToggle, { handleToggle, handleFalse, handleTrue }];
}
