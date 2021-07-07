import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer'
import HeaderContent from './components/HeaderComponents/HeaderContent';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HeaderContent />
      <CardContainer />
    </div>
  );
}

export default App;

