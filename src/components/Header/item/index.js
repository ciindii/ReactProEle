import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css'

class Item extends Component {

    constructor(props) {
        super(props)
        this.text = props.text
    }

    render() {
        return (
            <div className='top-menu-item'>
                <Link to={this.text}>
                {this.text}
              </Link>
            </div>
        )
    }
}

export default Item;
