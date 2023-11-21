import React from 'react';
import './flash_sales.css';
import '../product_card/product_card.css';
import Product_card from '../product_card/product_card.jsx';
import { useState,useEffect} from 'react';
import Timer from './timer.js';
import { Link, useNavigate } from 'react-router-dom';

export default function Flash_sales() {
  const [productsContainer, setProductsContainer] = useState(null);

  const Navigate = useNavigate();

  useEffect(() => {
    const productsContainerEl = document.querySelector(".products");
    productsContainerEl.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      productsContainerEl.scrollLeft += evt.deltaY;
      
    });
    setProductsContainer(productsContainerEl);

  }, []);

  return (
    <div className="section_parent">
        <div className="bullet">
            <div className="bullet_marker"></div>
            <div className="bullet_name">Today's</div>
            
        </div>
        <div className="heading">
            <div className="title">Flash Sales</div>
            <div className="timer">(Ends in <Timer duration={1.5*60*60*1000} className="timer2"/>)</div>
        </div>
    
    <div className="products">
        <Product_card image="./images/controller.png" name="HAVIT HV-G92 Gamepad" discount="40" new_price="100" old_price="160" rate_num="88" rating={4} onSmash={()=>{
        Navigate('/product');
        window.scroll(0,0);    
        }}/>
        <Product_card image="./images/keyboard.png" name="AK-900 Wired Keyboard" discount="35" new_price="750" old_price="1160" rate_num="75" rating={4}/>
        <Product_card image="./images/display.png" name="IPS LCD Gaming Monitor" discount="25" new_price="280" old_price="400" rate_num="99" rating={5}/>
        <Product_card image="./images/keyboard.png" name="AK-900 Wired Keyboard" discount="35" new_price="300" old_price="1160" rate_num="75" rating={4}/>
        <Product_card image="./images/keyboard.png" name="AK-900 Wired Keyboard" discount="35" new_price="960" old_price="1160" rate_num="75" rating={4}/>
        <Product_card image="./images/controller.png" name="HAVIT HV-G92 Gamepad" discount="40" new_price="100" old_price="160" rate_num="88" rating={4}/>
        <Product_card image="./images/display.png" name="IPS LCD Gaming Monitor" discount="25" new_price="280" old_price="400" rate_num="99" rating={5}/>
        <Product_card image="./images/display.png" name="IPS LCD Gaming Monitor" discount="25" new_price="280" old_price="400" rate_num="99" rating={5}/>
        <Product_card image="./images/display.png" name="IPS LCD Gaming Monitor" discount="25" new_price="280" old_price="400" rate_num="99" rating={5}/>
        <Product_card image="./images/display.png" name="IPS LCD Gaming Monitor" discount="25" new_price="280" old_price="400" rate_num="99" rating={5}/>
        </div>

        <div className="view_container">
          <div className="view_button">View all products</div>
        </div>
    </div>
  )
}
