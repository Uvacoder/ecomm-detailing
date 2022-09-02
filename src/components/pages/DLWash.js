import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from '../helpers/ScrollToTop';

import cover from '../../assets/imgs/DLWashCover.jpg';

const steps = [
  ["Wash Vehicle", "Thourough 2 bucket or equivalent top to bottom wash including the gas door."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, wheel barrels."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Wax", "Apply Spray Wax."],
  ["Dress Vehicle", "Dress tires, wheel wells, plastics."],
]

export default function DLWash() {
  const content = steps.map((item, id) => {
    return (
      <li key={id} className="item">
        <div className="step-number-container">
          <h3 className='step-number'>{id + 1}</h3><div className='vertical-rule'></div>
        </div>
        <div className="step-container">
          <h4 className="step-title">{item[0]}</h4>
          <p className='step-desc'>{item[1]}</p>
        </div>
      </li>
    )
  });

  return (
    <section className='service-content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <h1 className='servicepage-header'>Dirt-Less Wash</h1>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2>Our Exterior Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>

          <div className='aside-container'>
            <div className='service-aside'>
              <h3>Other Exterior Services</h3>
              <div className="aside-links">
                <Link to="/dl-wash" style={{color: window.location.href.endsWith('dl-wash') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('dl-wash') ? '> ' : ''} Dirt-Less Wash</Link><br />
                <Link to="/premium-dl-wash" style={{color: window.location.href.endsWith('premium-dl-wash') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('premium-dl-wash') ? '> ' : ''} Premium Dirt-Less Wash</Link><br />
                <Link to="/engine" style={{color: window.location.href.endsWith('engine') ? 'blue' : 'black'}} className={'service-link'}>{window.location.href.endsWith('engine') ? '> ' : ''} Single Stage Paint Correction</Link>
              </div>
            </div>
            <HashLink smooth to="/#contact" className="quote-btn service-page-quote-btn" scroll={el => scrollWithOffset(el)}>Get Started</HashLink>
          </div>
        </div>

        <div>
          <h2 className='pricing-title'>PRICING</h2>
          <h4 className='subtext'>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">SMALL</h4>
              <p className="example-vehicle">Small cars and mini trucks</p>
              <p className="pricing-price">$75</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">MEDIUM</h4>
              <p className="example-vehicle">Mid size SUV's, and most Wagons</p>
              <p className="pricing-price">$100</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">LARGE</h4>
              <p className="example-vehicle">Big SUV's and Big trucks</p>
              <p className="pricing-price">$125</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">EXTRA LARGE</h4>
              <p className="example-vehicle">Massive trucks and above</p>
              <p className="pricing-price">$150</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}