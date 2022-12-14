import React from 'react';
import Link from 'next/link';
import { scrollWithOffset } from '../helpers/ScrollToTop';

import cover from '../../assets/imgs/BioCover.webp';

const steps = [
  ["Determine Products", "We will first determine what products will need to be used to best suit the situation."],
  ["Disinfect", "Fully disinfect every single surface in the vehicle before we even get started."],
  ["Full Interior Cleaning", "Then we will perform our Full Interior Cleaning Process on the vehicle."],
  ["Ozone Treatment", "Then we will perform Ozone Air treatment to fill all bacteria, mold spores, and get rid of smells where it's impossible to get to conventionally."]
]

export default function Bio() {
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
      <h1 className='servicepage-header'>Smoke/Biohazard/Odor Removal</h1>

      <div className='main-content-container'>
        <div className='process-container'>
          <div>
            <h2>Our Biohazard Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>
          
          <Link href="/#contact" className="quote-btn service-page-quote-btn" scroll={el => scrollWithOffset(el)}>Get Started</Link>

          <div className='aside-container'>
            <div className='service-aside'>
              <h3>Other Interior Services</h3>
              <div className="aside-links">
                <Link href="/full-int-ex" style={{color: window.location.href.endsWith('full-int-ex') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('full-int-ex') ? '> ' : ''} Full Interior Cleaning</Link><br />
                <Link href="/bio" style={{color: window.location.href.endsWith('bio') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('bio') ? '> ' : ''} Bio Hazard/Odor Cleaning</Link><br />
                <Link href="/headliners" style={{color: window.location.href.endsWith('headliners') ? 'blue' : 'black'}} className={'service-link'}>{window.location.href.endsWith('headliners') ? '> ' : ''} Headliners</Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className='pricing-title'>Our Pricing</h2>
          <h4 className='subtext'>Our basic prices are shown below, final pricing may vary based on your vehicle size and condition.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
            <h4 className="size">All Vehicles</h4>
              <p className="example-vehicle">(Any Size)</p>
              <p className="pricing-price">$400-$800</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
