import React, {Component} from 'react';
// import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYelp } from '@fortawesome/free-brands-svg-icons';


class Socialmedia extends Component {
  render() {
    return (
      <div className="socialMedia">
        <p>connect</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/duong.quynh.984" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          </li>
          <li>
            <a href="https://www.instagram.com/elliebeautyhouse/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
          </a>
          </li>
          <li>
            <a href="https://www.yelp.com/biz/ellies-beauty-house-kent-2?osq=ellie+beauty+house" target="_blank">
              <FontAwesomeIcon icon={faYelp} />
          </a>
          </li>
        </ul>
      </div>
    )
  }
}
export default Socialmedia;
