import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './contact.css';

export default function Contact(){
    return(
        <>
        <Header/>
        <div className="contact_parent">
            <div className="contact_details"></div>
            <div className="message_parent">
                <div className="prsnl_info">
                    <input type="text" className="prsnl_input" required placeholder="Your Name"/>
                    <input type="text" className="prsnl_input" required placeholder="Your Email"/>
                    <input type="text" className="prsnl_input" required placeholder="Your Phone"/>
                </div>
                <textarea type="text" className="contact_message" placeholder="Your Message"/>
                <div className="send_button">Send Message</div>
            </div>
        </div>
        <Footer/>
        </>
    );
}