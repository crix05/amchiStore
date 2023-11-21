import React from 'react';
import './new_arrivals.css';

export default function New_arrivals() {
  return (
    <div className="new_parent">
        <div className="new_bullet">
            <div className="new_bullet_marker"></div>
            <div className="new_bullet_name">Featured</div>           
        </div>
        <div className="new_heading">
            <div className="new_title">New Arrivals</div>
        </div>

        <div className="display_parent">
            <div className="featured_1"></div>
            <div className="featured_2_3_4">
                <div className="featured_2"></div>
                <div className="featured_3_4">
                    <div className="featured_3"></div>
                    <div className="featured_4"></div>
                </div>
            </div>
        </div>

    </div>
  )
}
