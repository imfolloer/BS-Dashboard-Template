import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import "./styles.css";
import Welcome from "./Components/Welcome";
import Greet from "./Components/Greet";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import DashboardHeader from "./Components/DashboardHeader";
import DashboardSideNav from "./Components/DashboardSideNav";
import Footer from "./Components/Footer";
import { ThemeProvider } from "styled-components";

import { useDarkMode } from "./Components/UseDarkMode";
import { lightTheme, darkTheme } from "./Components/Theme";
import { GlobalStyles } from "./Components/Global";

import Toggle from "./Components/Toggle";

export default function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <>
          <DashboardHeader />
          <GlobalStyles />
          <div className="toggle-margin">
            <Toggle
              className="toggle"
              theme={theme}
              toggleTheme={toggleTheme}
            />
            <h4>It's a {theme === "light" ? "light theme" : "dark theme"}!</h4>
          </div>
        </>
        <Welcome />
        <FunctionClick />
        <ClassClick />
        <DashboardSideNav />
        {/*<Greet name="Vinay" quote="Strongest Avenger" />*/}
      </ThemeProvider>
      <br />

      {/*<DashboardSideNav></DashboardSideNav>
      <Footer />
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
      <Welcome />
      <FunctionClick />
      <ClassClick />
      <Greet name="Vinay" quote="Strongest Avenger" />
      <h2>Edit to see some magic happen!</h2>*/}
    </div>
  );
}
