import React, { useEffect, useState } from 'react';
import './MainSection4.scss'

export default function MainSection4() {
    const [miles, setMiles] = useState(0);
    
    return (
        <div className='section_4_wrapper'>
            <div className=' section_4 container'>
                <div className='section4_top'>
                    <h2 className='anim_item'>Travel</h2>
                    <span>Travel</span>
                </div>
                <div className='section4_beach_content anim_item'>
                    <h5>Shore</h5>
                    <h3>Airlie Beach <span>|</span> Australia</h3>
                </div>
                <div className='section4_location anim_item'>
                    <h5>Airline</h5>
                    <h4>Virgin Australia</h4>
                </div>
                <div className='data_location'>
                    <h3>Queensland <br /> Australia</h3>
                    <h3>{miles} Miles</h3>
                    <h3>23 Hours <br /> 5 Minutes</h3>
                    <h3>$1,976 USD</h3>
                </div>
            </div>
        </div>
    )
}
