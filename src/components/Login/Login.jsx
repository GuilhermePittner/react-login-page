import { useState } from "react";
import {FaUser, FaLock } from "react-icons/fa";
import './Login.css'

const Login = () => {

    // creating the form var
    const [pwd, setPwd] = useState("");
    const [email, setEmail] = useState("");

    // method called after submiting the form
    const handleSubmit = (event) => {
        
        // prevent page loading
        event.preventDefault();


    }

  return (
    <div className="container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-field">
                <input type="email" placeholder='your email...'
                onChange={(e) => setEmail(e.target.value)} />
                <FaUser className="icon"/>
            
            </div>
            <div className="input-field">
                <input type="password" placeholder='your password...'
                onChange={(e) => setPwd(e.target.value)} />
                <FaLock className="icon"/>
            </div>
            
            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Remember me
                </label>
                <a href="#">Can't remember your password?</a>
            </div>
            
            <button>Log In</button>

            <div className="signup-link">
                <p>
                    New here? <a href="#">Create your account</a>.
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login
