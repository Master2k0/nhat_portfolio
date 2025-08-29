import React, { createContext, ReactElement, useContext, useMemo, } from "react";

type GlobalContextShape = {
  setOverlay: (value: boolean) => void;
  overlay: boolean;
}

const Context: React.Context<GlobalContextShape> = createContext({} as GlobalContextShape);

export const GlobalContext = ({ children }: { children: React.ReactNode }): ReactElement => {
  const [overlay, setOverlay] = React.useState(false);

  const contextValue = useMemo(() => {
    return { overlay, setOverlay };
  }, [overlay, setOverlay])
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = (): GlobalContextShape => {
  return useContext(Context)
}