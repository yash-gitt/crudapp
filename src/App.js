import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Pages/Home";
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NotFound from './Components/Pages/NotFound';
import Addusers from './Components/users/AddUsers';
import EditUsers from './Components/users/EditUsers';
import View from './Components/users/View';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path ="/" element={<Home/>} />
          <Route exact path = "/users/add" element={<Addusers/>}/>
          <Route exact path = "/users/edit/:id" element={<EditUsers/>}/>
          <Route exact path ="/users/view/:id" element={<View/>}/>
          <Route element={<NotFound/>}/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;

