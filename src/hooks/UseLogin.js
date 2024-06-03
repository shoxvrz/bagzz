import React, { useState } from "react";

const UseLogin = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const userInputHandler = (e) => {
    const {name, value} = e.target;

    setUserData((prev) => ({...prev, [name]: value}))
  }

  return{userData, userInputHandler}
};

export default UseLogin;
