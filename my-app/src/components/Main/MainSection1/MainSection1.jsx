import React, { useEffect, useState } from 'react';
import ElementSliderPanel from '../../ElementSliderPanel/ElementSliderPanel';
import './MainSection1.scss';

const elementSliderPanel = [
    { text: 'North Shore', number: '01' },
    { text: 'South Shore', number: '02' },
    { text: 'West Shore ', number: '03' },
    { text: 'East Shore', number: '04' },
]

const arrayImagePaths = [
    `radial-gradient(62.09% 62.09% at 42.87% 49.23%,
            rgba(34, 34, 34, 0.43) 0%, #0F0F0F 100%),
        url('/img/slider_main/surf_0.jpg')left 0px bottom 0px / cover no-repeat`,
    `radial-gradient(62.09% 62.09% at 42.87% 49.23%,
            rgba(34, 34, 34, 0.43) 0%, #0F0F0F 100%),
        url('/img/slider_main/surf_1.jpg')left 0px bottom 0px / cover no-repeat`,
    `radial-gradient(62.09% 62.09% at 42.87% 49.23%,
            rgba(34, 34, 34, 0.43) 0%, #0F0F0F 100%),
        url('/img/slider_main/surf_2.jpg')left 0px bottom 0px / cover no-repeat`,
    `radial-gradient(62.09% 62.09% at 42.87% 49.23%,
            rgba(34, 34, 34, 0.43) 0%, #0F0F0F 100%),
        url('/img/slider_main/surf_3.jpg')left 0px bottom 0px / cover no-repeat`
]

export default function MainSection1() {
    let [activeSlide, setActiveSlide] = useState(0);

    const clickNextSlide = () => {
        const a = activeSlide + 1
        if (activeSlide === 3) {
            setActiveSlide(0)
            return
        }
        setActiveSlide(a);
    }

    const clickBackSlide = () => {
        const a = activeSlide - 1
        if (activeSlide === 0) {
            setActiveSlide(3)
            return
        }
        setActiveSlide(a);
    }

    useEffect(() => {
        const backgroundSlider = document.querySelector('.slide_wrapper');
        backgroundSlider.style.cssText += `
        background:${arrayImagePaths[activeSlide]};
    `;
    }, [activeSlide])

    return (
        <section className='section_1'>
            <div className='parent_arrow container'>
                <div className='box_arrow_slider'>
                    <div className='arrow_back' onClick={clickBackSlide}>
                        <img src="/img/arrow2.png" alt="back" />
                    </div>
                    <div className='arrow_next' onClick={clickNextSlide}>
                        <img src="/img/arrow.png" alt="next" />
                    </div>
                </div>
            </div>
            <div className='name_site'><h2>go <br /> surf</h2></div>
            <div className='slider'>
                <div className='slide'>
                    <div className='slide_wrapper'>
                    </div>
                    <div className='slide_text container'>
                        <h5>Surf</h5>
                        <h3>West Shore</h3>
                        <h5>Condition</h5>
                        <h4>Radical</h4>
                        <div className='arrow_next'>
                            <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Shape Copy" d="M15.3688 19.5874L23.5824 11.4366C24.3348 10.6854 24.3348 9.46621 23.5824 8.71758L15.3688 0.561968C14.6101 -0.189173 13.3821 -0.185404 12.6234 0.561968C11.8723 1.31437 11.8723 2.52856 12.6234 3.28096L17.4285 8.04838L2.01437 8.04838C0.900866 8.04838 -1.90735e-05 8.94802 -1.90735e-05 10.0615C-1.90735e-05 11.1738 0.900866 12.0747 2.01437 12.0747L17.4575 12.0747L12.6234 16.8672C11.8723 17.6183 11.8723 18.8338 12.6234 19.5849C13.3809 20.3373 14.6089 20.3386 15.3688 19.5875V19.5874Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='slider_panel container'>
                <div className='arrow_down'>
                    <a href="#section2"><img src="/img/navigation/Down_Arrows.svg" alt="#" /></a>
                </div>
                <div className='element_slider_panel_box'>
                    {elementSliderPanel.map(element => <ElementSliderPanel activeSlide={activeSlide} text={element.text} number={element.number} setActiveSlide={(value) => setActiveSlide(value)} />)}
                </div>
            </div>
        </section>
    )
}
