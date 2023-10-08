import React from 'react';
import './Header.scss';
import moment from 'moment';

export default function Header() {
  const year = Date();
  const date = moment().format('YYYY')
  console.log(date)
  return (
    <div className='header'>
      <div className='header_logo'>
        <h2 className='h2_surf'>surf</h2>
        <h2>go</h2>
      </div>
      <div>
        <nav>
          <ul>
            <li><img src="https://vladislavkiselov.github.io/Go_Surf//img/navigation/Surf.svg" alt="surf" /></li>
            <li><img src="https://vladislavkiselov.github.io/Go_Surf//img/navigation/Travel.svg" alt="travel" /></li>
            <li><img src="https://vladislavkiselov.github.io/Go_Surf//img/navigation/Camp.svg" alt="sleep" /></li>
            <li><img src="https://vladislavkiselov.github.io/Go_Surf//img/navigation/serf_shop.svg" alt="shop" /></li>
          </ul>
        </nav>
        <div className='search'>
          <img alt="search" src="/img/navigation/Search.svg" />
        </div>
        <div className='date_now'>
          <h3>{moment().format('DD')}</h3>
          <div className='box_month_year'>
            <h4>{moment().format('MM')}</h4>
            <span></span>
            <h4>{moment().format('YYYY')}</h4>
          </div>
        </div>
        <div className='location'>
          <img src="https://vladislavkiselov.github.io/Go_Surf//img/navigation/POI.svg" alt="#" />
          <h5>California</h5>
        </div>
      </div>
    </div>
  )
}
