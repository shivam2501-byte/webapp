import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";

function App() {
  const [mode, setMode] = useState('light');   //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#010275f2';
      showAlert("Dark Mode is enabled", "success");
      document.title = "TextUtils - dark mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");
      document.title = "TextUtils - light mode";
    }
  }
  return (
    <>


      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container">

        <Alert alert={alert} />
        <TextForm heading="Enter the text to Analyze:" mode={mode} showAlert={showAlert} />
        {/* <About mode={mode} /> */}

      </div>




    </>
  );
}

export default App;
