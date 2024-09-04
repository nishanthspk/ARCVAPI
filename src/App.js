import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/Navbar.jsx'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Navbar />  
      <Routes>
        
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
