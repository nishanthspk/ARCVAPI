import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/Navbar.jsx'; 
import Home from '../src/Pages/Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Navbar />  
      <Routes>
      <Route path="/" element={<Home />} />
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
