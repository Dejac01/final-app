import React from 'react'
import { useEffect, useState } from "react";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // login logic
    // API call to authenticate user
    console.log('User:', user);
    console.log('Password:', password);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label htmlFor="contactInfo">User</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
