import React, { Component } from 'react';
import Header from './HeaderComponents';
import { Routes, Route } from 'react-router-dom';
import ForMasterAndPlayer from './pages/ForMasterAndPlayer';
import FirstSteps from './pages/FirstSteps';
import Calculator from './pages/Calculator';
import Gameplay from './pages/Gameplay';
import Mechanics from './pages/Mechanics';
import './App.css';
import MainPage from './pages/MainPage';

class App extends Component {
  render() {

    return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage pagename={'main'}/>} />
        <Route exact path='/Gameplay' element={<Gameplay pagename={'gameplay'}/>} />
        <Route exact path='/Mechanics' element={<Mechanics pagename={'mechanics'}/>} />
        <Route exact path='/FirstSteps' element={<FirstSteps pagename={'firststeps'}/>} />
        <Route exact path='/ForMasterAndPlayer' element={<ForMasterAndPlayer/>} />
        <Route exact path='/Calculator' element={<Calculator/>} />
      </Routes>
    </>
    )
  }
}

export default App