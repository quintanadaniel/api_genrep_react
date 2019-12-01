import React from 'react';


//components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//Data
import items from '../data/menu';

function App() {
  return (
    <div className="App">
      <Header title="PruebaDani" items={items} />
      <Content />
      <Footer copyright="&copy; Derechos Reservados Makro"/>
    </div>
  );
}

export default App;
