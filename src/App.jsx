import React, { useState } from "react";
import Form from "./Compoents/Form";
import Navbar from "./Compoents/Navbar";
import Ad from "./Compoents/Ad";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#000000";
    } else {
      setMode("light");
      document.body.style.background = "white";
    }
  };

  return (
    <>
      <Navbar mode={mode} toggle={toggle} />
      <Ad />
      <Form mode={mode} />
      <Ad />
    </>
  );
};

export default App;
