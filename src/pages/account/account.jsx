import React from 'react';
import './account.css';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import { useNavigate } from 'react-router-dom';


export default function Account({name}) {
const Nav = useNavigate();
  return (
    <>
    <Header/>
    <div className="account_parent">
        <div className="account_welcome">
          Welcome! <span className="account_name">{name}</span>
        </div>
        <div className="account_main">
          <div className="account_sidebar">
            <div className="account_sidebar_section">
              <div className="acc_title" style={{marginTop: 0}}>Manage your account</div>
                <div className="acc_links">My profile</div>
                <div className="acc_links">Address Book</div>
                <div className="acc_links">My Payment Options</div>
            </div>
            <div className="account_sidebar_section">
            <div className="acc_title">My orders</div>
                <div className="acc_links">My Returns</div>
                <div className="acc_links">My Cancellations</div>
            </div>
            <div className="account_sidebar_section">
            <div className="acc_title">My Wishlist</div>
            <div className="acc_title acc_sign_up" onClick={()=>{Nav('/register'); window.scroll(0,0)}}>Sign up</div>
            </div>
          </div>
          <div className="account_edit">
            <div className="edit_title">Edit Your Profile</div>
            <div className="edit_details_parent">
              <div className="edit_details">
                <label for="first" className="edit_name_label">First Name</label>
                <input type="text" className="edit_input" id="first" placeholder="Enter first name"/>
              </div>
              <div className="edit_details">
                <label for="last" className="edit_name_label">Last Name</label>
                <input type="text" className="edit_input" id="last" placeholder="Enter last name"/>
              </div>
            </div>
            <div className="edit_details_parent">
            <div className="edit_details">
                <label for="email" className="edit_name_label">Email</label>
                <input type="text" className="edit_input" id="email" placeholder="Enter email"/>
              </div>
              <div className="edit_details">
                <label for="address" className="edit_name_label">Address</label>
                <input type="text" className="edit_input" id="address" placeholder="Enter address"/>
              </div>
            </div>
            <div className="edit_details">
              <div className="edit_name_label">Password</div>
              <input type="text" className="edit_password" placeholder="Current Password"/>
              <input type="text" className="edit_password" style={{marginTop: 10}} placeholder="New Password"/>
              <input type="text" className="edit_password" style={{marginTop: 10}} placeholder="Confirm New password"/>
            </div>
            <div className="edit_buttons">
            <div className="save_button">Save changes</div>
              <div className="cancel_button">Cancel</div>
            </div>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}