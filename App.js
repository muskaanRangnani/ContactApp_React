import React from "react";
import { Route,Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Add from "./Components/Add";
import Edit from "./Components/Edit";

const App = () => {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/add" element={<Add />}></Route>
          <Route exact path="/edit/:id" element={<Edit />}> </Route>
      </Routes>
    
      </div>
  )
}

export default App