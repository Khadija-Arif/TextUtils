// import './App.css'; // Ensure this file exists
import './App.css';
import Navbar from './Navbar'; // Check import
import Textform from './Textform'; // Check import
// import About from './About'; // Check import
import { useState } from 'react'; 
import Alert from './Alert'; // Check import

// Commented out for now
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   Router,
// } from "react-router-dom"; // Ensure react-router-dom is installed and imported correctly

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Alert /> */}
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Textform heading="Enter Text to analyze " mode={mode} />} />
        </Routes> */}
        <Textform heading="Enter Text to analyze " mode={mode} />
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
