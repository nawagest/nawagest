import { useLayoutEffect, useState } from 'react';
import './App.css';
import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects';
import Contact from './components/pages/contact/Contact';
import Error from './components/pages/error/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/partials/Navbar';

function App() {
  const [_, setDarkMode] = useState('light');
  const darkMode = localStorage.getItem('darkMode');

  const handleClick = () => {
      setDarkMode((prevValue) => {
          localStorage.setItem('darkMode', prevValue === 'light' ? 'dark' : 'light');
          return prevValue === 'light' ? 'dark' : 'light';
      });
  }

  useLayoutEffect(() => {
    if(darkMode === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode])

  return (
    <BrowserRouter>
      <Navbar isDark={darkMode} click={handleClick} />
      <Routes>
        <Route path='/' element={<Home isDark={darkMode} />} />
        <Route path='/projects' element={<Projects isDark={darkMode} />} />
        <Route path='/contact' element={<Contact isDark={darkMode} />} />
        <Route path='/*' element={<Error isDark={darkMode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
