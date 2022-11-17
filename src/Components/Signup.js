import React,{useState}  from "react";
import './Signup.css';
import { register } from '../Redux/Actions/register.actions'
import Navbar from './Navbar.js';
import {connect} from "react-redux"

function Signup({registerUser}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');


    const handleChange = (e) => {
        setFirstName(e.target.value);
      }
 
    const handleLastNameChange = (e) => {
        setLastName (e.target.value);
      }

      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      }
    
      const handleConfPasswordChange = (e) => {
        setConfPassword(e.target.value);
      }
      
    
    
      const handleSubmit =  (e) => {
        e.preventDefault();
        if (password !== confPassword) {
          console.log("password Not Match");
        } else {
            const name = `${firstName} ${lastName}`
            const userRole = 'user'          
            registerUser({name,email,password,userRole})
        }
        
      }
    return(
        <div className="signup">
            <Navbar/>

            <div className="Allcontent">
                <div className="newdiv">
                    <div className="head">
                        <h1>Hello Friend</h1>
                        <div className="paragraph">
                        <p>To keep connected with us please Sign up with your personal information.</p>
                        </div>
                    </div>
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <h3> Sign up </h3>
                        <div className="labels">
                        <label>
                            Firstname:
                        </label><br />
                        <input type="text" value={firstName} required onChange={(e)=> { handleChange(e) }} /><br />
                        </div>

                        <div className="labels">
                        <label >
                            Lastname:
                        </label><br />
                        <input type="text" value={lastName} required onChange={(e)=> { handleLastNameChange(e) }} /><br />
                        </div>

                        <div className="labels">
                        <label>
                            Email:
                        </label><br />
                        <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
                        </div>

                        <div className="labels">
                        <label>
                            Password:
                        </label><br />
                        <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br/>
                        </div>

                        <div className="labels">
                        <label>
                            Confirm Password:
                        </label><br />
                        <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />
                        </div>
                        <div>
                            Already a member? Log in
                        </div>
                        <button>Sign up</button>
                    </form>     
                </div>
      </div>
        </div>
    )
}

const mapDispatchToProps = {
    registerUser: register,
};

export default connect(null, mapDispatchToProps)(Signup);



 
