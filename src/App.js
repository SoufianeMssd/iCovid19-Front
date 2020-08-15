import React from 'react';
import './App.css';
import NavBarContainer from './containers/navBarContainer';
import CoronaContainer from './containers/coronaContainer';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <NavBarContainer />
      <CoronaContainer />
      <Footer />
    </div>
  );
}

export default App;
