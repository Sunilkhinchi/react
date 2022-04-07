import React from 'react';
import {Link} from 'react-router-dom';

 function Navbar() {
  return (
    <>
 <ul className="nav navbar-nav nav-cus">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="#">Top 10 Risks </Link>
                    <ul className="sub-menu">
                                 <div className="listdiv">
                                    <li id="menu-item" className="menu-item "><Link to="#">Brexit </Link></li>
                                    <li id="menu-item" className="menu-item"><Link to="#">Business and Human Rights</Link></li>
                                    <li id="menu-item" className="menu-item "><Link to="#">COVID-19</Link></li>
                                    <li id="menu-item" className="menu-item"><Link to="#">Cyber Security</Link></li>
                                    <li id="menu-item" className="menu-item "><Link to="#">Travel</Link></li>
                                    <li id="menu-item" className="menu-item"><Link to="#">IBOR Transition</Link></li>
                                    <li id="menu-item" className="menu-item "><Link to="#">SPACs</Link></li>
                                    <li id="menu-item" className="menu-item"><Link to="#">Technology Innovation</Link></li>
                                    <li id="menu-item" className="menu-item "><Link to="#">ESG</Link></li>
                                    <li id="menu-item" className="menu-item"><Link to="#">Workforce and Mobility</Link></li>
                                 </div>                                

                    </ul>
                </li>
                <li><Link to="/White Papers">White Papers </Link></li>
                <li><Link to="/Archive">Archive</Link></li> 
                             
              </ul>   
</>
  )
}
export default Navbar;

