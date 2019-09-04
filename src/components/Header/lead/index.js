import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

class Lead extends Component {

    constructor(props) {
        super(props)
        this.text = props.text
    }

    render() {
        return (
            <div className='top-menu-lead'>
              <div className="brand-name">
                <Link to="/">
                  <img src="img/ex2-2-white.png" alt=""/>
                </Link>
              </div>
            </div>
        )
    }
}

export default Lead;
