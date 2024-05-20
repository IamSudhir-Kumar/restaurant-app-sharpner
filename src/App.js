import React from 'react';
import Header from './components/layout/Header';
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Other components go here */}
      <Meals />
    </div>
  );
}

export default App;
