import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
// APP COMPONENTS
import Header from './components/Header/Header';
import Backdrop from './components/Backdrop/Backdrop';
import About from './components/Backdrop/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Backdrop}/>
        <Route path="/About" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
