import React from 'react';
import './MainSection2.scss';
import ElementOnMap from '../../ElementOnMap/ElementOnMap';

const arrayElementOnMap = [
    {
        classElement: 'airlie_beach',
        altElement: 'oval',
        beach: 'airlie beach',
        continent: 'Australia',
        'surfTf': '9 - 13',
        'tideTf': '+2.3',
        'windKTS': '4 SE'
    },
    {
        classElement: 'kovalam_surf_club',
        altElement: 'oval',
        beach: 'kovalam surf beach',
        continent: 'Australia',
        'surfTf': '9 - 13',
        'tideTf': '+2.3',
        'windKTS': '4 SE'
    },
    {
        classElement: 'malibu_beach',
        altElement: 'oval',
        beach: 'malibu beach',
        continent: 'Australia',
        'surfTf': '9 - 13',
        'tideTf': '+2.3',
        'windKTS': '4 SE'
    },
    {
        classElement: 'vieux_boucau',
        altElement: 'oval',
        beach: 'vieux boucau beach',
        continent: 'Australia',
        'surfTf': '9 - 13',
        'tideTf': '+2.3',
        'windKTS': '4 SE'
    },
    {
        classElement: 'surf_camp_pipa',
        altElement: 'oval',
        beach: 'surf camp pipa beach',
        continent: 'Australia',
        'surfTf': '9 - 13',
        'tideTf': '+2.3',
        'windKTS': '4 SE'
    },

]

export default function MainSection2() {
    // function handleMouseEnter(e) {
    //     const blockMap = e.currentTarget;
    //     const allImgBlockMap = Array.from(blockMap.querySelectorAll('img'));
    //     allImgBlockMap.shift();
    //     allImgBlockMap.forEach(item => item.src = '/img/Oval.png');

    //     const element = e.target;
    //     if (element.className === 'map') {
    //         return
    //     }
    //     element.src = "/img/Oval2.svg"
    // }

    return (
        <section className='section2' id="section2">
            <img src="/img/POI.svg" alt="poi" className='poi' />
            <div className='wrapper_section2 container'>
                <h2 className='h2_surf_section2 anim_item'>Surf</h2>
                <h5 className='background_text_surf'>Surf</h5>
                <h4 className='h4_location_section2 anim_item'>Current location</h4>
                <h3 className='h3_city_section2 anim_item'>California | USA</h3>
                <div className='word_map' >
                    <img src="/img/World_Map_Dots.svg" alt="map" className='map' />
                    {arrayElementOnMap.map(element => <ElementOnMap classElement={element.classElement}
                        altElement={element.altElement}
                        beach={element.beach}
                        continent={element.continent}
                        surfTf={element.surfTf}
                        tideTf={element.tideTf}
                        windKTS={element.windKTS} />)}
                </div>
            </div>
        </section>
    )
}
