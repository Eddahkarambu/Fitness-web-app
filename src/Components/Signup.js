import React,{useState, useEffect }  from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';
import './Signup.css';
import Navbar from './Navbar.js';


function Signup() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.logout());
    }, []);


    
    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
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
                        <input type="text"  value={user.firstName} onChange={handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                    {submitted && !user.firstName &&
                        <div className="invalid-feedback">First Name is required</div>
                    } <br />
                        </div>

                        <div className="labels">
                        <label >
                            Lastname:
                        </label><br />
                        <input type="text"  name="lastName" value={user.lastName} onChange={handleChange} className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                    {submitted && !user.lastName &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }<br />
                        </div>

                        <div className="labels">
                        <label>
                            Username:
                        </label><br />
                        <input type="username"  name="username" value={user.username} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
                    {submitted && !user.username &&
                        <div className="invalid-feedback">Username is required</div>
                    }<br />
                        </div>

                        <div className="labels">
                        <label>
                            Password:
                        </label><br />
                        <input type="password"  name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }<br/>
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
export default Signup;