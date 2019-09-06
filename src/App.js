// REACT
import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
// APP COMPONENTS
import Header from './components/Header/Header';
import Hompepage from './components/Homepage/Homepage';
import About from './components/Backdrop/About';
import Policy from './components/Policy/Policy';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Hompepage}/>
        <Route path="/About" component={About} />
        <Route path="/Policy" component={Policy} />
      </div>
    </BrowserRouter>
  );
}

export default App;
