import React from 'react';
import './App.css';
import MasterView from "./components/MasterView"
import Header from "./components/Header"

function App() {
  return (
    <React.Fragment>
      <Header />
      <MasterView />
    </React.Fragment>
  );
}

export default App;
