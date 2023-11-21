import React from 'react';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar_parent">
        <div className="women_dropdown">
        <div className="sidebar_tags">Women's Fashion</div>
        <div className="drop">&gt;</div>
        </div>
        <div className="men_dropdown">
        <div className="sidebar_tags">Men's Fashion</div>
        <div className="drop">&gt;</div>
        </div>
        <div className="sidebar_tags">Electronics</div>
        <div className="sidebar_tags">Home & Lifestyle</div>
        <div className="sidebar_tags">Medicine</div>
        <div className="sidebar_tags">Sports & Outdoor</div>
        <div className="sidebar_tags">Baby's & Toys</div>
        <div className="sidebar_tags">Groceries & Pets</div>
        <div className="sidebar_tags">Health & Beauty</div>
    </div>
  );
}