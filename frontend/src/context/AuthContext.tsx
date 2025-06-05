import { createContext } from "react";
import { Profile } from "./AuthProvider";

type UserContextType = {
  profile: Profile | undefined;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
