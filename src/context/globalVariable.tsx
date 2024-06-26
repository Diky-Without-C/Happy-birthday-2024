import { createContext, useContext, useState, ReactNode } from "react";

interface GlobalState {
  data: Record<string, any>;
  setData: (
    newData: (prev: Record<string, any>) => Record<string, any>,
  ) => void;
}

const defaultState: GlobalState = {
  data: {},
  setData: () => {},
};

const GlobalContext = createContext<GlobalState>(defaultState);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<Record<string, any>>({});

  const setData = (newData: Record<string, any>) => {
    setDataState(newData);
  };

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
}

const useGlobalContext = () => useContext(GlobalContext);
export default useGlobalContext;
