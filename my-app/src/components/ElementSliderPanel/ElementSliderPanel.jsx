import React from 'react';
import './ElementSliderPanel.scss';

export default function ElementSliderPanel({ text, number, activeSlide, setActiveSlide }) {
    function handelClick() {
        setActiveSlide(number.at(-1) - 1)
    }

    return (
        <div className='element_slider_panel' onClick={handelClick}>
            <span className={`line ${activeSlide + 1 == number.at(-1) && 'line_active'}`}></span>
            <div>
                <h5>{number}</h5>
                <h6>{text}</h6>
            </div>
        </div>
    )
}
