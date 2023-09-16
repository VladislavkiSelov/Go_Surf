import React from 'react';
import './MainSection2.scss'

export default function MainSection2() {
    function handleMouseEnter(e) {
        const blockMap = e.currentTarget;
        const allImgBlockMap = Array.from(blockMap.querySelectorAll('img'));
        allImgBlockMap.shift();
        allImgBlockMap.forEach(item => item.src = '/img/Oval.png');

        const element = e.target;
        if (element.className === 'map') {
            return
        }
        element.src = "/img/Oval2.svg"
    }
    return (
        <section className='section2' id="section2">
            <img src="/img/POI.svg" alt="poi" className='poi' />
            <div className='wrapper_section2 container'>
                <h2 className='h2_surf_section2 anim_item'>Surf</h2>
                <h5 className='background_text_surf'>Surf</h5>
                <h4>Current location</h4>
                <h3>California | USA</h3>
                <div className='word_map' onClick={(e) => handleMouseEnter(e)}>
                    <img src="/img/World_Map_Dots.svg" alt="map" className='map' />
                    <img src="/img/Oval.png" alt="oval" className='airlie_beach' />
                    <img src="/img/Oval.png" alt="oval" className='kovalam_surf_club' />
                    <img src="/img/Oval.png" alt="oval" className='malibu_beach' />
                    <img src="/img/Oval.png" alt="oval" className='vieux_boucau' />
                    <img src="/img/Oval.png" alt="oval" className='surf_camp_pipa' />
                </div>
            </div>
        </section>
    )
}
