import React, { createContext, useState } from "react";

export const NameCtx = createContext("");
NameCtx.displayName = "Name";

const NameContextProvider = (props) => {
  const [name, setName] = useState("welcome");
  return (
    <NameCtx.Provider value={{ name, setName }}>
      {props.children}
    </NameCtx.Provider>
  );
};
export default NameContextProvider;
