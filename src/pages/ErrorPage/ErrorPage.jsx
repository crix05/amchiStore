import React from 'react';
import './errorpage.css';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='bg-C'>

    <section className='notFound'>
        <div className='Co'>
        404 Not Found
        </div>
    </section>
<p className='Pa'>Your visited page not found. You may go home page.</p>
      <NavLink>Back to Home Page</NavLink>
    </div>
  )
}

export default ErrorPage;
