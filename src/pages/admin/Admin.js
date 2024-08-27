import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../../components/AppAppBar";
import Hero from "../../components/Hero";
import getLPTheme from "../../getLPTheme";
import { useToggleTheme } from "../../context/ToggleThemeContext";

const Admin = () => {
  const { isDark, setIsDark } = useToggleTheme();
  console.log(setIsDark);
  const LPtheme = createTheme(getLPTheme(isDark));

  const toggleColorMode = () => {
    setIsDark((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={isDark} toggleColorMode={toggleColorMode} />
      <Hero />
    </ThemeProvider>
  );
};

export default Admin;
