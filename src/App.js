import React from "react";
import Profile from "./components/profile/Profile";
import Heder from './components/Header/Heder';
import Nav from "./components/navbar/Nav";
import Dialogs from "./components/dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Heder />
        <Nav />
      {/*  <Content /> */}
        <div class='app-wrapper-content'>
          <Routes >
            <Route path="/dialogs" Component={Dialogs} />
            <Route path="/dialogs/:id" Component={Dialogs} />
            <Route path="/profile" Component={Profile} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
