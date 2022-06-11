import { createContext } from "react";
import { useState, useEffect } from "react";
import {
  OnAuthStateChangeListener,
  signOutUser,
} from "../utils/firebase/firebase.utils";

//as the actual value you want access
export const UserContext = createContext({
  currentUser: "null",
  setCurrentUser: () => null,
});

//provider is component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  signOutUser();

  useEffect(() => {
    const unsubscribe = OnAuthStateChangeListener((user) => {
      console.log(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
