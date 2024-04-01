import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/Main';
import { Login } from './pages/Login';
import { CreatePost } from './pages/create-post/CreatePost';
import { Navbar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path ="/" element={<Main/>} />   
          <Route path ="/login" element={<Login/>} /> 
          <Route path ="/createpost" element={<CreatePost/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
