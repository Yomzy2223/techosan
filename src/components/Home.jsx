import React, { useState } from "react";
import "../css/home.css";
import Body from "./Body";
import Header from "./Header";
import SideBar from "./SideBar";
import { createContext } from "react";

export const myContext = React.createContext();

function Home() {
  const [state, setState] = useState({
    sidebar_right: "auto",
    sidebar_width: 0,
  });

  const setSideBar = (sidebar_right, sidebar_width) => {
    setState({ ...state, sidebar_right, sidebar_width });
  };

  return (
    <div id="home" className="homepage">
      <myContext.Provider
        style={{ overflow: "visible" }}
        value={{ setSideBar: setSideBar, state }}
      >
        <Header />
        <SideBar />
        <div className="body-container">
          <Body />
        </div>
      </myContext.Provider>
    </div>
  );
}

export default Home;
