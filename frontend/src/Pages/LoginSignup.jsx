import React, { useState } from 'react'
import './Css/LoginSignup.css'

const LoginSignup = () => {
  const [form, setForm] = useState({});

  const handleFrom = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    // e.preventDefault();
    const responce = await fetch('http://localhost:8080/userdata',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'content-Type':'application/json'
      }
    })
    const data = await responce.json()
    console.log(data)
  }


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' name='username' onChange={(handleFrom)}/>
          <input type="email" placeholder='Your Email' name='email' onChange={(handleFrom)}/>
          <input type="password" placeholder='Your Password' name='password' onChange={(handleFrom)}/>
        </div>
        <button onClick={handleSubmit}>Continue</button>
        <p className="loginsignup-login">Already have an account ? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
