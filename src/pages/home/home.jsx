import React from 'react';
import './home.css';
import Footer from '../../components/footer/footer.jsx';
import Flash_sales from '../../components/flash_sales/flash_sales.jsx';
import Categories from '../../components/categories/categories.jsx';
import Best_selling from '../../components/best_selling/best_selling.jsx';
import Header from '../../components/header/header.jsx';
import Our_products from '../../components/our_products/our_products.jsx';
import Slider_sidebar from '../../components/slider_sidebar/slider_sidebar.jsx'; 
import New_arrivals from '../../components/new_arrivals/new_arrivals.js';
import Speaker_image from '../../components/speaker_image/speaker_image.js';
import Bottom_image from '../../components/bottom_image/bottom_image.jsx';
import '../../components/product_card/product_card.css';
import '../../components/flash_sales/flash_sales.css';

function Home() {
  return (
    <>
    <Header/>
    <Slider_sidebar/>
    <div className="content">
    <Flash_sales/>
    <Categories/>
    <Best_selling/>
    <Speaker_image/>
    <Our_products/>
    <New_arrivals/>
    <Bottom_image/>
    </div>
    <Footer /> 
   {/* <Product_card_select imageA="./images/display.png" imageB="./images/Bag.png" name="HAVIT HV-G92 Gamepad" new_price="100" old_price="160" rate_num="88" rating={4} col1="red" col2="green"/> */}
    </>
  );
}

export default Home;