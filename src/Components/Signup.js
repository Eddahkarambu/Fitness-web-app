import React,{useState}  from "react";
import './Signup.css';
import Navbar from './Navbar.js';


function Signup() {
    const [Firstname, setFirstname] = useState('')
    const [Lastname, setLastname] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');



    const handleChange = (e) => {
        setFirstname(e.target.value);
      }

      
    const handleLastnameChange = (e) => {
        setLastname(e.target.value);
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
    
      const handleSubmit = (e) => {
        if (password !== confPassword) {
          console.log("password Not Match");
        } else {
          console.log("Form submitted successfully")
          
        }
        e.preventDefault();
      }
    return(
        <div className="signup">
            <Navbar/>

            <header className="App-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h3> Sign up </h3>
          <div className="heading">
            I don't sweat, i sparkle.
          </div>

          <label >
            Firstname:
          </label><br />
          <input type="text" value={Firstname} required onChange={(e)=> { handleChange(e) }} /><br />

          <label >
            Lastname:
          </label><br />
          <input type="text" value={Lastname} required onChange={(e)=> { handleLastnameChange(e) }} /><br />
        
          <label>
            Email:
          </label><br />
          <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
          <label>
            Password:
          </label><br />
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          <label>
            Confirm Password:
          </label><br />
          <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />
          <div>
            Already a member? Log in
          </div>
          <input type="Sign up" value="Submit" />
        </form>
      </header>

        </div>

    )
}
export default Signup;