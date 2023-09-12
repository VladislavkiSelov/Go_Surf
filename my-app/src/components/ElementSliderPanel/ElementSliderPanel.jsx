import React from 'react';
import './ElementSliderPanel.scss';

export default function ElementSliderPanel({ text, number }) {
    return (
        <div className='element_slider_panel'>
            <span className='line'></span>
            <div>
                <h5>{number}</h5>
                <h6>{text}</h6>
            </div>
        </div>
    )
}
