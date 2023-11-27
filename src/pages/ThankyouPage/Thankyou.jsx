import React from 'react';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import './thankyou.css'

const Thankyou = () => {
  return (
    <>
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
}

export default Thankyou;
