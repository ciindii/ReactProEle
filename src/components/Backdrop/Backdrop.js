import React, {Component} from 'react';
import About from './About';
import './Backdrop.css'

class Backdrop extends Component {
  render = () => {
    return (
      <div className="backdrop">
        <div className="mission-text">
          <p>we do </p>
        </div>
        <a href="#" className="action-btn view-services-btn">
          view services
        </a>
        <About />
      </div>

    )
  }
}
export default Backdrop;
