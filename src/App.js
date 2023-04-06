import React, { Component } from 'react';
import Header from './HeaderComponents';
import { Routes, Route } from 'react-router-dom';
import ForMasterAndPlayer from './pages/ForMasterAndPlayer';
import FirstSteps from './pages/FirstSteps';
import Calculator from './pages/Calculator';
import Gameplay from './pages/Gameplay';
import Mechanics from './pages/Mechanics';
import './App.css';
import './Calculator.css'
import MainPage from './pages/MainPage';

class App extends Component {
  render() {

    return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route path='/Gameplay' element={<Gameplay />} />
        <Route path='/Mechanics' element={<Mechanics />} />
        <Route path='/FirstSteps' element={<FirstSteps />} />
        <Route path='/ForMasterAndPlayer' element={<ForMasterAndPlayer />} />
        <Route path='/Calculator' element={<Calculator />} />
      </Routes>
    </>
    )
  }
}

export default App