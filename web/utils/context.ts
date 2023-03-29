import { createContext } from "react";

type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

type ContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const Context = createContext<ContextType>({
  user: null,
  setUser: () => {},
});

export default Context;