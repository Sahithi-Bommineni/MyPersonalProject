import { useState } from 'react';
import axios from 'axios';

function Registration() {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => { // aync function helps to handle slow network requests
        e.preventDefault(); // Prevent the default form submission behavior
        try{
            const response = await axios.post('http://localhost:3001/api/auth/register', {
            username, email, password
        });
            console.log("Registration successful:", response.data);
            // Redirect to login or home page after successful registration
            window.location.href = '/login';
        }
        catch(error){
            console.error("There was an error registering!", error);
            alert(error.response?.data?.message || "Registration failed. Please try again.");
        };
    };
    
    return (
        <div className='login-container'>
            <div className="left-panel">
                <div className="tree">
                    <div className="leaves"></div>
                    <div className="trunk"></div>
                </div>
                <div className="floating-leaves leaf-1"></div>
                <div className="floating-leaves leaf-2"></div>
                <div className="floating-leaves leaf-3"></div>
                <div className="ground"></div>
            </div>
            <div className="right-panel">
                <div className="login-form">
                    <h1>Registration Page</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label> Username:</label>
                            <input type="text" name="username" onChange={(e)=>setName(e.target.value)} required/>
                        </div>
                        <div className='form-group'>    
                            <label>Email:</label>
                            <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} required/>
                        </div>
                        <div className='form-group'>
                            <label>Password:</label>
                            <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                        <button type="submit" className='login-btn'>Register</button>
                        <p className='signup-link'>Already have an account?
                            <a href="/login" className="login-link">
                                Login here
                            </a></p>
                    </form>
                </div>
            </div>
        </div> 
    );
}

export default Registration;