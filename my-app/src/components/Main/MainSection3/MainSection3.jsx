import React, { useState } from 'react';
import SlideSection3 from '../../SlideSection3/SlideSection3';
import './MainSection3.scss';

const arraySlide = [
    {
        img: "/img/slider1/slide1.png",
        name: 'Cloud Nine',
        continent: 'Siargao | Philippines'
    },
    {
        img: "/img/slider1/slide2.png",
        name: 'Airlie Beach',
        continent: 'Queensland | Australia'
    }, {
        img: "/img/slider1/slide3.png",
        name: 'Vieux Boucau',
        continent: 'Hossegor | France'
    }, {
        img: "/img/slider1/slide4.png",
        name: 'Malibu Beach',
        continent: 'California | USA'
    }
]

export default function MainSection3() {
    const [slide1, setSlide1] = useState(arraySlide[0]);
    const [slide2, setSlide2] = useState(arraySlide[1]);
    const [slide3, setSlide3] = useState(arraySlide[2]);
    const [slide4, setSlide4] = useState(arraySlide[3]);

    return (
        <section className='section3 container_slider_section3'>
            <div className='box_arrow_slider'>
                <div className='arrow_back'>
                    <img src="/img/arrow2.png" alt="back" />
                </div>
                <div className='arrow_next' >
                    <img src="/img/arrow.png" alt="next" />
                </div>
            </div>
            <div className='slider_section3'>
                <SlideSection3 src={slide1.img} alt='slide1' classSlide='slide_section1' name={slide1.name} continent={slide1.continent} />
                <SlideSection3 src={slide2.img} alt='slide2' classSlide='slide_section2' name={slide2.name} continent={slide2.continent} />
                <SlideSection3 src={slide3.img} alt='slide3' classSlide='slide_section3' name={slide3.name} continent={slide3.continent} />
                <SlideSection3 src={slide4.img} alt='slide4' classSlide='slide_section4' name={slide4.name} continent={slide4.continent} />
            </div>
        </section>
    )
}
