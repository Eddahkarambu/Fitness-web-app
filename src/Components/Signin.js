import React,{useState} from "react";
import './Signin.css';
import Navbar from './Navbar.js';

function Signin(){
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    return(
        <div className="signin">
            <Navbar/>
            <div className="SigninContainer">
                <div className="combined">
 
                <form>
                <div className="Headin">
                    SIGN IN TO YOUR ACCOUNT
                </div>
                    
                    <div className="fields">
                    <label><b>Email</b></label>
                    <input type="text" placeholder="Email" value={email} name="email"  />
                    </div>


                    <div className="fields">
                    <label ><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" value={Password} name="password"  />
                    </div>

                    <div className="forgotpassword">
                    <label><b>Forgot Password?</b></label>
                    </div>
                    
                    <div className="checkbox">
                    <label ><b>Remember Me</b></label>
                    <input type="checkbox" value="RememberMe"></input>
                    </div>
                    

                    <button >Sign in</button>  
                </form>

                <div className="Firsthead">
                    <h2>New here!</h2>
                    <div className="paragraph">
                        Sign up to discover a great amount of new opportunities
                    </div>
                    <div className="btn">
                    <div className="buttonss">Sign up</div>
                    </div>
                   
                </div>
               
                </div>  
            </div>
        </div>
    )
    

}
export default Signin;