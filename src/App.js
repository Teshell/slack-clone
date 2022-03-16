import React from "react";
import Header from "./components/Header";

import styled from "styled-components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />

          <AppBody>
            <SideBar />

            <Routes>
              <Route exact path="/" />
            </Routes>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
