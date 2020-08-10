import React from 'react';
import './App.css';
import NavBarContainer from './containers/navBarContainer';
import Corona from './components/corona';

function App() {
  return (
    <div className="App">
      <NavBarContainer />
      <Corona />
    </div>
  );
}

export default App;
