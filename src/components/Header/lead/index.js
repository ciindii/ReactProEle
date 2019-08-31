import React, { Component } from 'react';

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
                <a href="#">
                  <img src="img/ex2-2-white.png" alt=""/>
                </a>
              </div>
            </div>
        )
    }
}

export default Lead;
