import React, { useState } from 'react';
import './ElementOnMap.scss'

export default function ElementOnMap({ classElement, altElement, beach, continent, surfTf, tideTf, windKTS }) {
    const [pathElement, setPathElement] = useState(false);
    const [statusCard, setStatusCard] = useState(false)

    function onHoverEnter() {
        if (pathElement === false) {
            setPathElement(true)
            setStatusCard(true)
        } else {
            setPathElement(false)
            setStatusCard(false)
        }
    }

    function onHoverLeave() {
        if (pathElement === true) {
            setPathElement(false)
            setStatusCard(false)
        } else {
            setPathElement(true)
            setStatusCard(true)
        }
    }

    return (
        <div className={`element_on_map_box ${classElement}`} onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>
            <img src={pathElement === false && "https://vladislavkiselov.github.io/Go_Surf//img/Oval.png" || pathElement === true && "https://vladislavkiselov.github.io/Go_Surf//img/Oval2.svg"} alt={altElement} />
            {statusCard === true && <div className='wrapper_card_beach'>
                <div className='card_top'>
                    <h4>{beach}</h4>
                    <h5>{continent}</h5>
                </div>
                <div className='card_bottom'>
                    <div>
                        <img src="https://vladislavkiselov.github.io/Go_Surf//img/wave.svg" alt="#" />
                        <h6>{surfTf}</h6>
                        <p>Surf (FT)</p>
                    </div>
                    <div>
                        <img src="https://vladislavkiselov.github.io/Go_Surf//img/Water.svg" alt="#" />
                        <h6>{tideTf}</h6>
                        <p>Tide (FT)</p>
                    </div>
                    <div>
                        <img src="https://vladislavkiselov.github.io/Go_Surf//img/Wind.svg" alt="#" />
                        <h6>{windKTS}</h6>
                        <p>Wind (KTS)</p>
                    </div>
                </div>

            </div>}
        </div>
    )
}
