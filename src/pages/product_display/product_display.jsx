import React from 'react';
import Header from '../../components/header/header.jsx';
import Roadmap from '../../components/Roadmap/roadmap.jsx';
import Display from '../../components/display/display.jsx';
import Footer from '../../components/footer/footer.jsx'

export default function Product_display() {
  return (
    <>
      <Header/>
      <Display 
      name='Havic HV G-92 Gamepad' 
      num={4} 
      rate_num='55' 
      stock='Out of stock' 
      price='192.00' 
      description='PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.'/>
      <Footer/>
    </>
  );
}
