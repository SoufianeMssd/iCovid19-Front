import React from 'react';
import './App.css';
import NavBarContainer from './containers/navBarContainer';
import Corona from './components/corona';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <NavBarContainer />
      <Corona />
      <Footer />
    </div>
  );
}

export default App;
