import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import SideNav from './components/SideNav/SideNav'
import SliderParent from './components/SliderComponents/SliderParent'

function App() {
  return (
    <div className="App">
      <Header />
      <SideNav />
      <SliderParent />
    </div>
  );
}

export default App;
