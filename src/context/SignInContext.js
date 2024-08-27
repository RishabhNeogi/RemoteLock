import { createContext, useState, useContext } from "react";

export const SignInContext = createContext(null);

export const useSignIn = () => {
  const SignInState = useContext(SignInContext);
  return SignInState;
};

export const SignInProvider = ({ children }) => {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <SignInContext.Provider value={{ isSignIn, setIsSignIn }}>
      {children}
    </SignInContext.Provider>
  );
};
