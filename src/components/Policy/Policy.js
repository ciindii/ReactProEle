import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Homepage.css'

class Item extends Component {

    render() {
        return (
          <div class="container">
              <div id="policy" data-aos="fade-up" data-aos-duration="600">
                <h2>
                  policy
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum corporis temporibus consequatur officiis quam, officia libero tempore suscipit quaerat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, molestiae..
                </p>
                <h2>CANCELLATIONS</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum corporis temporibus consequatur officiis quam, officia libero tempore suscipit quaerat.
                </p>
                <h2>CANCELLATION FEES</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum corporis temporibus consequatur officiis quam, officia libero tempore suscipit quaerat.
                  <br>
                  <div className="cell-policy-div">
                  <a href="tel:206-000-000" className="cell cell-policy">
                    <span>call</span>
                  </a>
                  </div>
                </p>
                <h2>LATE ARRIVALS</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum corporis temporibus consequatur officiis quam, officia libero tempore suscipit quaerat. Lorem ipsum dolor sit amet.
                </p>
                <h2>EYELASH SERVICES</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum corporis temporibus consequatur officiis quam, officia libero tempore suscipit quaerat.
                </p>
                <h2>MICROBLADING SERVICES</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum corporis temporibus consequatur officiis quam, officia libero tempore suscipit quaerat.
                  
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia fugit minus cupiditate harum similique recusandae autem mollitia distinctio unde et.
                </p>
                <h2>WAXING SERVICES</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum corporis temporibus consequatur officiis quam, officia libero tempore suscipit quaerat.
                </p>
                <h3></h3>


              </div>
                    <button onclick="topFunction()" id="myBtn" title="Go to top"><i class="fas fa-angle-double-up"></i> <br/>top</button>
            </div>
        )
    }
}

export default Item;
