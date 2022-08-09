import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from './login';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async e => {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    const res = await axios.post(
      `http://localhost:4000/api/auth/register`,
      user
    );
    console.log(res.status);
    // if (res.status === 200) {
    //   alert('account created');
    //   <Login />;
    // }
  };
  return (
    <>
      <Header />
      <form>
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
        {/* <input
          type='password'
          placeholder='Re-enter Password'
        /> */}
        <p className='login-link'>
          Already have an account? <a href='/login'>Login</a>
        </p>
        <button onClick={login}>Register</button>
      </form>
      <Footer />
    </>
  );
}
