import React from 'react';
import Image_slider from '../image_slider/image_slider.js';
import Sidebar from '../sidebar/sidebar.js';
import './slider_sidebar.css';

export default function Slider_sidebar() {
  return (
    <div className="section">
      <div className="sidebar">
    <Sidebar/>
    </div>
    <div className="slider">
    <Image_slider/>
    </div>
    </div>
  );
}
