import React from 'react'
import './LoginPage.scss'

const LoginPage = () => {
  return (
    <div className='login'>
        <div className="login__inputs">
        <h1 className='title'>Login</h1>
            <div>
                <label>Email</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" />
            </div>
            <button>Submit</button>
            <p>Don't You Have an Account? Sign Up</p>
        </div>
    </div>
  )
}

export default LoginPage