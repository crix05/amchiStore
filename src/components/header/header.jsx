import React from 'react';
import { useState,useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import './header.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CancelIcon from '@mui/icons-material/Cancel';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link,useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Dropdown(){

  const Nav = useNavigate();
  return(
    <div className="prof_dropdown">
      <div className="dropdown_rows">
        <PersonIcon/>
        <div className="dropdown_text" onClick={()=>{Nav('/accounts'); window.scroll(0,0)}}>Manage My Account</div>
      </div>
      <div className="dropdown_rows">
        <LocalMallIcon/>
        <div className="dropdown_text">My Order</div>
      </div>
      <div className="dropdown_rows">
        <CancelIcon/>
        <div className="dropdown_text">My Cancellations</div>
      </div>
      <div className="dropdown_rows">
        <StarBorderIcon/>
        <div className="dropdown_text">My Reviews</div>
      </div>
      <div className="dropdown_rows">
        <LogoutIcon/>
        <div className="dropdown_text">Logout</div>
      </div>
    </div>
  )
}

export default function Header() {

  const [nav,setNav] = useState('/Home');
  const Navigate = useNavigate();

  // logic for prof_dropdown

    const [recolor, setRecolor] = useState("black");
    const [dropdown, setDropdown] = useState("none");
    const [check, setCheck] = useState(1);

  function handleClick(){
    if(check){
      setCheck(!check);
      setRecolor("#DB4444");
      setDropdown("block");
    }

    else{
      setCheck(!check);
      setRecolor("black");
      setDropdown("none");
    }
  }


  // logic for underline on header_nav_content
  // const [under1,setUnder1 ] = useState("none");  // "underline"
  // const [under2,setUnder2 ] = useState("none");
  // const [under3,setUnder3 ] = useState("none");
  // const [under4,setUnder4 ] = useState("none");

  const handleClick1 = () => {
    // setUnder1('underline');
    // setUnder2('none');
    // setUnder3('none');
    // setUnder4('none');
    Navigate("/home");
  };


  const handleClick2 = () => {
    // setUnder1('none');
    // setUnder2('underline');
    // setUnder3('none');
    // setUnder4('none');
    Navigate("/Contact");
  };

  const handleClick3 = () => {
    // setUnder1('none');
    // setUnder2('none');
    // setUnder3('underline');
    // setUnder4('none');
    Navigate("/about");
  };

  const handleClick4 = () => {
    // setUnder1('none');
    // setUnder2('none');
    // setUnder3('none');
    // setUnder4('underline');
    Navigate("/login");
  };

  // useEffect(()=>{
  //  if(under1 === "underline"){
  //   Navigate("/home");}
  //   else if(under2==="underline"){
  //     Navigate("/about");}
  // },[under1,under2]);

  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div className="header_parent">
        <div className="top_header">
            <p className="abc">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="shop_now">Shop Now</span>
            </p>
            <select className="language">
                <option className="opt" selected>English</option>
                <option className="opt">Bengali</option>
            </select>
        </div>
        <div className="main_header">
            <div className="header_title" onClick={handleClick1}></div>
            <div className="header_nav">
              <div className="header_nav_content" onClick={handleClick1}>Home</div>
              <div className="header_nav_content" onClick={handleClick2}>Contact</div>

              <div className="header_nav_content" onClick={handleClick3}  >About</div>     
   
              <div className="header_nav_content" onClick={handleClick4}>Sign up</div>
            </div>
            <div className="header_other">
              <div className="search_container">
              <input className="header_search" placeholder={isMobile ? 'Search' : 'What are you looking for ?'}/>
              <span className="search_icon_bg">
                <SearchIcon sx={{color:"grey"}}/>
              </span>
              </div>
              <FavoriteBorderIcon className="header_icons"/>
              <ShoppingCartIcon className="header_icons" onClick={()=>{Navigate('/cart'); window.scroll(0,0);}}/>
              <AccountCircleIcon className="header_icons" sx={{color: recolor, height: 30, width: 30}} onClick={handleClick}/>
              {/* <div className="menu_icon" style={{color:'black', fontWeight: 'bold', fontSize:'120%'}}>&#9776;</div> */}
            </div>
        </div>
        <div className="dropdown_container" style={{display: dropdown}}>
        <Dropdown/>
        </div>
    </div>
  )
}