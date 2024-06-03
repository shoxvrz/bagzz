import React, { useState, useEffect } from "react";
import './SignPage.scss'
import UseLogin from "../../hooks/UseLogin";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const SignPage = () => {
    const { userData, userInputHandler } = UseLogin();
    const navigate = useNavigate();
    const [existUserData, setExistUserData] = useState([]);

    useEffect(() => {
        getAllUserData();
    }, []);

    const getAllUserData = async () => {
        try {
            const { data, status } = await axios.get('http://localhost:3000/users');
            if (status === 200) {
                setExistUserData(data);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const submitHandler = async () => {
        if (userData.name && userData.email && userData.password) {
            const emailExists = existUserData.some(user => user.email === userData.email);
            if (emailExists) {
                console.log('Email already exists in the database');
                return;
            }

            if (userData.email.includes('admin777')) {
                navigate('/cart');
            } 
            navigate('/home')
            const response = await axios.post('http://localhost:3000/users', userData);
        } else {
            console.log('Error: Required fields are missing');
        }
    };
    

    console.log(userData);

    return (
        <div className="sign">
            <div className="sign__inputs">
                <h1 className="title">Sign Up</h1>
                <div>
                    <label>Name</label>
                    <input onChange={userInputHandler} name='name' type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <input onChange={userInputHandler} name='email' type="text" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input onChange={userInputHandler} name='password' type="password" />
                </div>
                <button onClick={submitHandler}>Submit</button>
                <p>Do You Have an Account? Login</p>
            </div>
        </div>
    );
};

export default SignPage;
