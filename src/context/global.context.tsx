import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
} from "react";

interface GlobalContextType {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

const EmptyGlobalState: number = 0;

interface GlobalProps {
  children: ReactNode;
}

export function GlobalProvider({ children }: Readonly<GlobalProps>) {
  const [value, setValue] = useState<number>(EmptyGlobalState);

  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "GlobalContext must be used withiin a GlobalContextProvider"
    );
  }

  return context;
}
