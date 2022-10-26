import React,{useState}  from "react";
import './Signup.css';
import Navbar from './Navbar.js';

function Signin(){
    return(
        <div className="signup">
            <Navbar/>
            <div className="Container">
                <form>
                    <label for="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <button>Sign up</button>

                    <label>
                     <input type="checkbox" checked="checked" name="remember"> Remember me</input>
                     </label>

                    
                </form>
      


            
            </div>
           
        </div>
    )
    

}
export default Signin;