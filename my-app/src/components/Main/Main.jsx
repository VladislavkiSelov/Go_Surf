import React from 'react';
import ElementSliderPanel from '../ElementSliderPanel/ElementSliderPanel';
import './Main.scss';

const elementSliderPanel = [
  { text: 'North Shore', number: '01' },
  { text: 'South Shore', number: '02' },
  { text: 'West Shore ', number: '03' },
  { text: 'East Shore', number: '04' },
]


export default function Main() {
  return (
    <div className='main'>
      <section>
        <div className='box_arrow_slider container'>
          <div className='arrow_back'>
            <img src="/img/arrow2.png" alt="back" />
          </div>
          <div className='arrow_next'>
            <img src="/img/arrow.png" alt="next" />
          </div>
        </div>
        <div className='name_site'><h2>go <br /> surf</h2></div>
        <div className='slider'>
          <div className='slide_wrapper'>
            <div className='slide container'>
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
            <img src="/img/navigation/Down_Arrows.svg" alt="" />
          </div>
          <div className='element_slider_panel_box'>
            {elementSliderPanel.map(element => <ElementSliderPanel text={element.text} number={element.number} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
