import React, { useState } from 'react';
import image from './image.png';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './login.css';
const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
    <Header/>
    <div className='Conta'>
      <div className='img-Conta'>
        <img className='img_login' src={image} />
      </div>
      <div className='sml-conta' >
        <h2 className='first-head' >Log in to Exclusive</h2>
        <h5 className='sub-head'>Enter your details below</h5>
        <form className='form-page' onSubmit={handleSubmit}>
          <div>
            <input className='inpt-email'
              type="email"
              id="email or phone no"
              placeholder='Email or Phone no'
              value={username}
              onChange={handleUsername}
            />
          </div>

          <div>

            <input className='inpt-pswrd'
              type="password"
              id="password"
              placeholder='Password'
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className='ftr'>
            <button className="submit-btn" type="submit">Log In</button>
            <h5 className='lst-headi' style={{marginLeft: 10}}>Forget Password</h5>
          </div>

        </form>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  )


}

export default Login
