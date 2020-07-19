import React from 'react';
import './index.scss';

const Navbar = ()=>{

    return(
       
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src='../../assets/lif.png' width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy"/>
                    <span>Uplif</span>
                </a>
             </nav>
      
    )
}
export default Navbar;