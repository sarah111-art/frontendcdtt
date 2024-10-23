import React, { useState } from 'react';
import toast from 'react-hot-toast';
import './CSS/LoginSignup.css';
const LoginSignup = () =>{
    const [state,setState]=useState("Login");
    const [formData,setFromData]=useState({
        username:"",
        password:"",
        email:""
    })
    const [errors, setErrors] = useState({});

    
    
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFromData(prevFormData => ({ ...prevFormData, [name]: value }));
        validateField(name, value);
    };
    
    const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
        case "username":
            if (value.trim() === "") {
                errorMsg = "Username is required.";
            } else {
                // Assuming username should not contain special characters
                const usernamePattern = /^[a-zA-Z0-9_]+$/; // Cho phép chữ cái thường
                if (!usernamePattern.test(value)) {
                    errorMsg = "No special characters are allowed in username.";
                }
            }
            break;
        case "email":
            if (value.trim() === "") {
                errorMsg = "email is required.";
            } else {
                // Assuming username should not contain special characters
              
            
            }
            break;
        case "password":
            if (value.trim() === "") {
                errorMsg = "Password is required.";
            }
            break;
        default:
            break;
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: errorMsg }));
};

    const login =async()=>{
        console.log("Login Funtion Executed",formData);
        let responseData;
        await fetch('https://backendcdtt.onrender.com/login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((reponse)=>reponse.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            toast.error("error email ")
        }
    }

    const signup=async()=>{
        console.log("Sign Up Funtion Executed",formData);
        let responseData;
        await fetch('https://backendcdtt.onrender.com/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((reponse)=>reponse.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            toast.error("error email ")
        }
    }

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className='loginsignup-fields'>
                {errors.username && <span className="error">{errors.username}</span>}
                  {state==="Sign Up"? <> <input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your Name '/>
</>:<></>}
{errors.email && <span className="error">{errors.email}</span>}
                    <input name="email" value={formData.email} onChange={changeHandler} type='email' placeholder='email '/>
                    
        
                    <input name="password" value={formData.password} onChange={changeHandler} type='password' placeholder='Password '/>
                </div>
                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                {state==="Sign Up"?<p className="loginsignup-login">
                    Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span>
                </p>:<p className="loginsignup-login">
                    Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span>                 
                </p>}
         
             
                <div className='loginsignup-agree'>
                    <input type='checkbox' name='' id=''/>
                    <p>By continuing , i agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup  