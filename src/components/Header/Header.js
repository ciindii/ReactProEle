import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// APP COMPONENTS
import Item from './item';
import Lead from './lead';
import Socialmedia from './SocialMedia/Socialmedia';
import './Header.css';
// FONTAWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu_class: ''
    }
  }

  setToggleTopMenuClass = () => {
    if (this.state.menu_class === '') {
      this.setState({
        menu_class: 'toggled',
      })
    } else {
      this.setState({
        menu_class: '',
      })
    }
  }

  render = () => {
    let top_menu_class = `top-menu ${this.state.menu_class}`
    return (
      <div>

      <div className={top_menu_class}>

          <Lead />
          <div className='right'>
            <Link to="/"> <Item text='Home'/> </Link>
            <Link to="/About"><Item text='About'/>
          </Link>
            <Item text='Services'/>
            <Item text='Gallery'/>
          </div>

        <div className="overlay-bg">
          <div className="wrap">
            <ul className="wrap-nav">
              <div className="menu-icon-div">
                <Link to="/" className="exit-icon" onClick={this.setToggleTopMenuClass}><FontAwesomeIcon icon={faTimes} />
              </Link>
              </div>

              <li>
                <a href="#about">About</a>
                <ul>
                  <li>
                    <Link to="/About"><Item text='About'/>
                  </Link>
                  </li>
                  <li>
                    <a href='services.html'>
                      <Item text='policy'/>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="services.html">Services</a>
                <ul>
                  <li>
                    <a href='services.html'>
                      <Item text='services'/>
                    </a>
                  </li>
                  <li>
                    <a href="services.html#microblading-div">
                      <Item text='microblading'/>
                    </a>
                  </li>
                  <li>
                    <a href="services.html#waxing-div">
                      <Item text='waxing'/>
                    </a>
                  </li>
                  <li>
                    <a href="services.html#add-ons-div">
                      <Item text='add ons'/>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#portfolio">Work</a>
                <ul>
                  <li>
                    <a href="portfolio.html">
                      <Item text='gallery'/>
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
        <a className='top-menu-icon' onClick={this.setToggleTopMenuClass}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </a>
        <div className='clear-fix'/>
      </div>
    </div>)
  }
}

export default Header;
