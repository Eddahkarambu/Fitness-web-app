import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar(){
   
    return(
        <div className="navbar">
                <div className="Heading">
                    <div className='crossfit'>
                        <h1> CROSSFIT COLLECTIVE </h1>
                    </div>
                </div>
            <div className="main-nav">
                <Link to='/Home'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Programmes'>Programmes</Link>
                <Link to='/Success Stories'>Services</Link>
                <Link to='/Login'>Login</Link>
            </div>   
            {/* <div className="mobile-nav">
                <Link to='/Home'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Programmes'>Programmes</Link>
                <Link to='/Success Stories'>Services</Link>
                <Link to='/Login'>Login</Link>
            </div>      */}
        </div>

    );

}
export default Navbar