import { createContext, useState, useEffect, useContext } from "react";

export const ToggleThemeContext = createContext(null);

export const useToggleTheme = () => {
  const ToggleThemeState = useContext(ToggleThemeContext);
  return ToggleThemeState;
};

export const ToggleThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  };

  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("theme", isDark);
  }, [isDark]);

  return (
    <ToggleThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ToggleThemeContext.Provider>
  );
};
