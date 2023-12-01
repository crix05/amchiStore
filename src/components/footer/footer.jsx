import React from 'react';
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import { useNavigate } from 'react-router-dom';
import { BorderColor } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';

export default function Footer(){
    const Navigate = useNavigate();
    return(
        <>
    <footer className="footer_parent">
        <div className='footer_col'>
            <div className='footer_logo'></div>
            <div className='footer_title'>Subscribe</div>
            <div className='footer_content'>Get 10% off your first order</div>
            <div className="footer_input_bar">
            <input type="email" className='footer_email' placeholder='Enter your email'/>
            </div>
        </div>
        <div className='footer_col'  style={{paddingRight:40}}>
            <div className="footer_title">Support</div>
            <div className="footer_content">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</div>
            <div className="footer_content">exclusive@gmail.com</div>
            <div className="footer_content">+88015-88888-9999</div>
        </div>
        <div className='footer_col'>
            <div className="footer_title">Account</div>
            <div className="footer_content_hover">My Account</div>
            <div className="footer_content_hover">Login / Register</div>
            <div className="footer_content_hover">Cart</div>
            <div className="footer_content_hover">Wishlist</div>
            <div className="footer_content_hover">Shop</div>
        </div>
        <div className='footer_col'>
            <div className="footer_title">Quick Links</div>
            <div className="footer_content_hover">Privacy Policy</div>
            <div className="footer_content_hover">Terms Of Use</div>
            <div className="footer_content_hover" onClick={()=>{Navigate('/About');
            window.scroll(0,0);}}>About</div>
            <div className="footer_content_hover" onClick={()=>{Navigate('/Contact'); window.scroll(0,0);}}>Contact</div>
        </div>
        <div className='footer_col'>
            <div className="footer_title">Download App</div>
            <div className="footer_new_user">Save $3 with app (for new users only)</div>
            <div className="footer_other">
                <div className="footer_QR"></div>
                <div className="footer_google_apple">
                    <div className="footer_google"></div>
                    <div className="footer_apple"></div>
                </div>
            </div>
            <div className="footer_icons_col" sx={{paddingBottom: 20}}>
                <div className="footer_icons">
                    <FacebookIcon sx={{height:35, width:35}}/>
                </div>
                <div className="footer_icons">
                    <TwitterIcon sx={{height:35, width:35}}/>
                </div>
                <div className="footer_icons">
                    <InstagramIcon sx={{height:35, width:35}}/>
                </div>
                <div className="footer_icons">
                    <LinkedInIcon sx={{height:35, width:35}}/>
                </div>
            </div>
        </div>
    </footer>
    <div className="copyright">
        <CopyrightRoundedIcon sx={{width: 15, height: 15}}/>
        <div>Copyright .... 2023. All rights reserved</div>
    </div>
    </>
    );
}