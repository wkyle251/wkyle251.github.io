import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from './components/Main/Navigation';
import Blank from './components/Main/Blank';
import Home from './components/Main/Home';
import Project from './components/Main/Project';
import About from './components/Main/About';
import Profile from './components/Main/Profile';
import Contact from './components/Main/Contact';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';
import Container from '@mui/material/Container'

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#3a4660",
      // contrastText: '#fefad9',
    },
    secondary: {
      main: green[500],
    },
  },
});
function App() {

  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Navigation />
        <Container maxWidth="lg" >
        <Routes>
          <Route path='/' element={<Navigate to="/Home" />}></Route>
          <Route path="*" element={<Blank />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Introduction" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
