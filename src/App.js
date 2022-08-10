import React from 'react';
import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Detail from './component/detailPage/Detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/details' element={<Detail/>}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App