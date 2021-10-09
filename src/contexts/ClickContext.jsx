import React, { useState, createContext } from "react";

const ClickContext = createContext();
const ClickContextProvider = (props) => {
  const [addAcount, setAddAccount] = useState(false);

  const displayAddAccount = () => {
    setAddAccount(!addAcount);
  };

  return (
    <ClickContext.Provider
      value={{
        data: {
          displayAddAccount: addAcount,
        },
        methods: { displayAddAccount },
      }}
    >
      {props.children}
    </ClickContext.Provider>
  );
};

export { ClickContext, ClickContextProvider };
