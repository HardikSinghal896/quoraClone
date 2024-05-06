import React from 'react'
import Image1 from "../Images/Daco_2831899.png"
import "../styles/Login.css"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        emailId: ""
    });
    const navigate = useNavigate();
    const openHomePage = () => {
        console.log("Navigating with state: { greeting: 'sdsdfsf' }");
        // Pass state as a property of the route object
        navigate("/", {state: {greeting: "sdf", name: "Hardik",number:123}});
    };
    const validateform = async (e) =>{
        
        e.preventDefault();
        const updateEmployee = {...employee,firstName:"Hello",lastName:"Jane",emailId:"hardiksinghal896@gmail.com"};
        setEmployee(updateEmployee);
        try {
            const response = await axios.post("http://localhost:9090/employees/formsubmit",{
                email,
                password
            });
            console.log("form submitted successfully");
        } catch (error) {
            console.log("error in submit form",error);
        }
    }
    console.log(email);
    console.log(password);
      
    return (
        <div>
            <div className="login-container">
                <form action="https://www.google.com" method='get' onSubmit={validateform}>
                    <img src={Image1} alt="" />
                    <h1>Email</h1>
                    <input type="text" placeholder='Enter your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <h1>Password</h1>
                    <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    <div className="login-buttons">
                        <button type='submit'>Sign up</button>
                        <button type='submit'>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login