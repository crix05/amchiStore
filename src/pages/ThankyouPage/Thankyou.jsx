import React from 'react';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {
  const Nav = useNavigate();
  return (
    <>
      <Header />
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col items-center thank_cont">
          <DoneOutlineIcon className="text-green-500 w-16 h-16" />
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-2'>Thank you</h1>
          <h4 className='text-lg md:text-xl lg:text-2xl mb-4'>Your order has been placed</h4>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{Nav('/home'); window.scroll(0,0)}}>
            Continue with Shopping
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Thankyou;
