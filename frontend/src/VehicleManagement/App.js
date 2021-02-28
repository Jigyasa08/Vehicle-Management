import React from "react";
import { Navbar } from "./Components/Navbar";
import { Routes } from "./Routes/Routes";

export const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <Routes />
    </div>
  );
};
