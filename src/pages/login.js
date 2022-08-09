import axios from 'axios';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async e => {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    const res = await axios.post(`http://localhost:4000/api/auth/login`, user);

    console.log(res.status);
    if (res.status === 400) {
      alert('Wrong password');
    }
    if (res.status === 500) {
      alert('User doesnt exist');
    }
  };

  return (
    <>
      <Header />
      <form action='/auth'>
        <input
          type='text'
          placeholder='Username'
          name='username'
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={e => setPassword(e.target.value)}
        />
        <p className='login-link'>
          New User? <a href='/register'>Sign Up</a>
        </p>
        <button onClick={login}>Login</button>
      </form>
      <Footer />
    </>
  );
}
