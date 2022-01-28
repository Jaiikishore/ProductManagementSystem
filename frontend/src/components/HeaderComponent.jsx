import React, { Component } from 'react';
import package1 from './package.png'
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className=' sticky-top'>
                <header>
                    <nav className='navbar sticky-top navbar-dark bg-primary'>
                      <div href="https://projectbe.net" className="navbar-brand font-weight-bold"><img src={package1} width={27} alt=""/> PRODUCT MANAGEMENT SYSTEM</div>

                    </nav>
                </header>
            </div>
         );
    }
}
 
export default HeaderComponent;