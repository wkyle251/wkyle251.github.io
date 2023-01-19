import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from './components/Main/Navigation';
import Blank from './components/Main/Blank';
import Home from './components/Main/Home';
import Project from './components/Main/Project';
import About from './components/Main/About';
import Profile from './components/Main/Profile';
import Contact from './components/Main/Contact';


function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Navigate to="/Home" />}></Route>
        <Route path="*" element={<Blank />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Introduction" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
