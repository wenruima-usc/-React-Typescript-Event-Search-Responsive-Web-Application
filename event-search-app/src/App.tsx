import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import {Routes, Route, Navigate} from "react-router-dom"
import {Search} from "./pages/Search"
import {Favorite} from "./pages/Favorite"
import { NavBar } from './components/NavBar';
function App() {
  return (
    <>
    <NavBar/>
    <Container>
      <Routes>
        <Route path='/' element={<Navigate to="/search"></Navigate>}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/favorites" element={<Favorite />}/>
      </Routes>
    </Container>
    </>
  );
}

export default App;
