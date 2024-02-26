import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const[darkMode, setdarkMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1800);
  }
  const toggleMode = () =>{
    if(darkMode === 'light'){
      setdarkMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Is Enabled","success")
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setdarkMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Is Enabled","success")
      document.title = 'TextUtils - Light Mode'

    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar mode = {darkMode} toggleMode = {toggleMode}/>
      <Alert alert ={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path= "/" element ={<TextForm heading = "Enter Text To Analyze" mode = {darkMode} showAlert ={showAlert}/>} ></Route>
          <Route exact path= "/about" element ={<About />} ></Route>

        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
