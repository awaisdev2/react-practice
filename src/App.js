import { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import TextForm from './components/TextForm';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('light');
  
  const toggleDarkMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <>
    <Nav title="TextUtils" link1="Home" link2="About us" dropdown="Our Services" toggleDarkMode={toggleDarkMode} mode={mode}/>
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    <About mode={mode} modal="Sign up now!"/>
    <Footer title="TextUtils"  mode={mode}/>
    </>
  );
}

export default App;
