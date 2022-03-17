import React from "react";
import Header from "./components/Header";

import styled from "styled-components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SideBar from "./components/SideBar";
import Chat from "./components/Chat";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />

          <AppBody>
            <SideBar />

            <Routes>
              <Route exact path="/" element={<Chat />} />
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
