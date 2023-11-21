import React from 'react';
import './about.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaidIcon from '@mui/icons-material/Paid';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Bottom_image from '../../components/bottom_image/bottom_image';

function Board_member_card({img24,name,desgn,size}){
    return(
        <div className="board_card_parent">
            <div className="board_card_image" style={{backgroundImage:`url(${img24})`,backgroundSize: size}}></div>
            <div className="board_text">
                <div className="board_title">{name}</div>
                <div className="board_designation">{desgn}</div>
                <div className="board_socials">
                <TwitterIcon/>
                <InstagramIcon/>
                <LinkedInIcon/>
                </div>
            </div>
        </div>
    );
}

export default function About(){
    return(
        <>
        <Header/>
        <div className="about_parent">
            <div className="main_section">
                <div className="our_story">
                    <div className="our_story_title">Our Story</div>
                    <div className="our_story_para1">Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.</div>
                    <div className="our_story_para2">Exclusive has more than 1 Million products to offer, growing at a very fast rate. Exclusive offers a diverse assotment in categories ranging from consumer.</div>
                </div>
                <div className="about_image"></div>
            </div>
            <div className="customer_sales_details">
                <div className="about_detail">
                    <div className="about_detail_icon">
                        <StorefrontIcon sx={{height:30, width: 30}}/>
                    </div>
                    <div className="about_detail_num">10.5k</div>
                    <div className="about_detail_text">Sellers active our site</div>
                </div>
                <div className="about_detail">
                <div className="about_detail_icon">
                        <PaidIcon sx={{height:30, width: 30}}/>
                    </div>
                    <div className="about_detail_num">33k</div>
                    <div className="about_detail_text">Monthly Product Sale</div>
                </div>
                <div className="about_detail">
                <div className="about_detail_icon">
                        <ShoppingBagIcon sx={{height:30, width: 30}}/>
                    </div>
                    <div className="about_detail_num">45.5k</div>
                    <div className="about_detail_text">Customers active on our site</div>
                </div>
                <div className="about_detail">
                <div className="about_detail_icon">
                        <LocalAtmIcon sx={{height:30, width: 30}}/>
                    </div>
                    <div className="about_detail_num">25k</div>
                    <div className="about_detail_text">Annual gross sale on our site</div>
                </div>
                </div>
            </div>
            <div className="board_members">
                <Board_member_card size={200} img24="./images/board_1.png" name='Tom Cruise' desgn='Founder & Chairman'/>
                <Board_member_card size={240} img24="./images/board_2.png" name='Ema Watson' desgn='Managing Director'/>
                <Board_member_card size={260} img24="./images/board_3.png" name='Han Solo' desgn='Product Designer'/>
            </div>
            <div className="services_image"></div>
            <Bottom_image/>
        <Footer/>
        </>
    );
}