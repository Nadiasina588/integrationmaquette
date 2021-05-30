import React from 'react'
import './Login.css';
import { UserAddOutlined } from '@ant-design/icons'

const Login = () => {
  return (
    <>
      <div className="menu"></div>
      <div>
        <h3 className="h3">E-VOYAGE</h3>
        <h1 className="h1">Username:</h1>
        <input className="input"></input>
        <h2 className="h2">Password:</h2>
        <input className="input2"></input>
        <button className="button">Se connecter</button>
        <div className="connecter"><UserAddOutlined /></div>
      </div>


    </>
  )
}

export default Login
