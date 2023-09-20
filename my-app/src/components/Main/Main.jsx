import React from 'react';
import MainSection1 from './MainSection1/MainSection1';
import MainSection2 from './MainSection2/MainSection2';
import MainSection3 from './MainSection3/MainSection3';
import './Main.scss';

export default function Main() {
  return (
    <div className='main'>
      <MainSection1 />
      <MainSection2 />
      <MainSection3/>
    </div>
  )
}
