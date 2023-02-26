import { createContext } from "react";

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

type ContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

const Context = createContext<ContextType>({
  user: null,
  setUser: () => {},
});

export default Context;
