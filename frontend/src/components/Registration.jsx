import React, { useState } from 'react';
import axios from 'axios';

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => { // aync function helps to handle slow network requests
        e.preventDefault(); // Prevent the default form submission behavior
        axios.post('/api/register', {
            username: name,
            email: email,
            password: password
        })
        .then(response => {
            console.log("Registration successful:", response.data);
            // Redirect to login or home page after successful registration
            window.location.href = '/login';
        })
        .catch(error => {
            console.error("There was an error registering!", error);
            alert("Registration failed. Please try again.");
        });
    };
    
    return (
        <div>
            <h1>Registration Page</h1>
            <form onSubmit={handleSubmit}>
                <label> Username:
                    <input type="text" name="username" onChange={(e)=>setName(e.target.value)} required/>
                </label><br />
                <label>Email:
                    <input type="text" name="username" onChange={(e)=>setEmail(e.target.value)} required/>
                </label><br />
                <label>Password:
                    <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} required/>
                </label><br />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account?</p>
            <a href="/login" className="login-link">
                Login here
            </a>
        </div>
    );
}

export default Registration;