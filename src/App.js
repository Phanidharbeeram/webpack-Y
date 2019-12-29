import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Scroll from "./Scroll";
import NavBAr from "./NavBAr";

export default function App() {
  return (
    <div style={{ dispaly: "flex" }}>
      {" "}
      <BrowserRouter>
        <NavBAr />
        <Scroll />
      </BrowserRouter>
    </div>
  );
}
