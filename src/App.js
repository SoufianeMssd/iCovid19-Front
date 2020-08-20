/* eslint-disable no-magic-numbers */
import React from 'react';
import './App.css';
import NavBarContainer from './containers/navBarContainer';
import CoronaContainer from './containers/coronaContainer';
import FeedbackContainer from './containers/feedbackContainer';
import Footer from './components/footer';


const App = () => (
  <div className="App">
    <NavBarContainer />
    <div style={{'display': 'flex'}}>
      <CoronaContainer />
      <FeedbackContainer />
    </div>
    <Footer />
  </div>
);

export default App;
