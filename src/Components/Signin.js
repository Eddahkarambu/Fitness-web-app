import React,{useState} from "react";
import './Signin.css';
import Navbar from './Navbar.js';

function Signin(){
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleLastnameChange = (e) => {
        setEmail(e.target.value);
      }

      const handleEmailChange = (e) => {
        setPassword(e.target.value);
      }



    return(
        <div className="signin">
            <Navbar/>
            <div className="Container">
                <form>
                    <label><b>Email</b></label>
                    <input type="text" placeholder="Email" name="email" required/>

                    <label ><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required onChange={(e)=> { handleLastnameChange(e) }}/>

                    <button>Sign in</button>

                    <label>
                     <input type="checkbox"   name="remember" />
                     </label>


                    
                </form>
      


            
            </div>
           
        </div>
    )
    

}
export default Signin;