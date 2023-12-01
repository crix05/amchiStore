import React from 'react';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
<<<<<<< HEAD
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
=======
import './thankyou.css'
>>>>>>> 0c319a48e9fdf9f4c45dd0556d7598c993c2dfb7

const Thankyou = () => {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col items-center">
          <DoneOutlineIcon className="text-green-500 w-16 h-16" />
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-2'>Thank you</h1>
          <h4 className='text-lg md:text-xl lg:text-2xl mb-4'>Your order has been placed</h4>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Continue with Shopping
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
=======
      <div className="container_22">
        <div div className="thankyou">
        <DoneOutlineIcon className="double_tick" />
            <h1 className='h1_thankyou'>Thankyou</h1>
            <h4 className='h4_thankyou' >Your  Order has been placed</h4>
            <button className='btn_thankyou'>Continue with Shopping</button>
      </div>
      </div>
    </>
  )
>>>>>>> 0c319a48e9fdf9f4c45dd0556d7598c993c2dfb7
}

export default Thankyou;
