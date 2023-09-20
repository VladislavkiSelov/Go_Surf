import React, { useState } from 'react';
import './SlideSection3.scss'

export default function SlideSection3({ src, alt, classSlide, name, continent }) {
    const [showBtnSlide, setShowBtnSlide] = useState(false)

    function showCard(e) {
        const slide = e.currentTarget.querySelector('.background_slide_section3');
        slide.style.background = 'none';
        setShowBtnSlide(true)
    }

    function closeCard(e) {
        const slide = e.currentTarget.querySelector('.background_slide_section3');
        console.log(slide);
        slide.style.background = 'rgba(15, 16, 16, 0.7)';
        setShowBtnSlide(false)
    }

    return (
        <div className={classSlide} onMouseEnter={(e) => showCard(e)} onMouseLeave={(e) => closeCard(e)}>
            <img src={src} alt={alt} />
            <h2>{name}</h2>
            <h3>{continent}</h3>
            <span className='background_slide_section3'></span>
            {showBtnSlide === true && <div className='wrapper_btn_slide_dection3'>
                View
                <button>Surf
                    <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Shape Copy" d="M15.3689 19.5872L23.5825 11.4365C24.3349 10.6853 24.3349 9.46609 23.5825 8.71746L15.3689 0.561846C14.6102 -0.189295 13.3821 -0.185526 12.6235 0.561846C11.8723 1.31424 11.8723 2.52844 12.6235 3.28084L17.4286 8.04826L2.0144 8.04826C0.900896 8.04826 1.14441e-05 8.94789 1.14441e-05 10.0614C1.14441e-05 11.1736 0.900896 12.0745 2.0144 12.0745L17.4576 12.0745L12.6235 16.8671C11.8723 17.6182 11.8723 18.8337 12.6235 19.5848C13.3809 20.3372 14.6089 20.3385 15.3689 19.5873V19.5872Z" fill="white" />
                    </svg>
                </button>
            </div>}
        </div>
    )
}
