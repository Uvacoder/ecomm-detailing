import React from 'react';
import Link from 'next/link';
import { scrollWithOffset } from '../helpers/ScrollToTop';

import cover from '../../assets/imgs/headlinersCover.webp';

const steps = [
  ["Determine Method", "We have an array of gentle products available, the materials of your headliner will tell us what to use."],
  ["Clean Headliners", "We will perform the cleaning methods found from the first step, we do this to prevent sagging and damage to the headliners (Results may vary)."]
]

export default function Headliners() {
  const content = steps.map((item, id) => {
    return (
      <li key={id} className="item">
        <div className="step-number-container">
          <h3 className='step-number'>{id + 1}</h3><div className="vertical-rule"></div>
        </div>
        <div className="step-container">
          <h4 className="step-title">{item[0]}</h4>
          <p className='step-desc'>{item[1]}</p>
        </div>
      </li>
    )
  })
  return (
    <section className='service-content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <h1 className='servicepage-header'>Headliners</h1>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2>Our Headliner Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>

          <Link href="/#contact" className="quote-btn top-quote-btn service-page-quote-btn" scroll={el => scrollWithOffset(el)}>Get Started</Link>

          <div className='aside-container'>
            <div className='service-aside'>
              <h3>Our Other Interior Services</h3>
              <div className="aside-links">
                <Link href="/full-int-ex" style={{color: window.location.href.endsWith('full-int-ex') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('full-int-ex') ? '> ' : ''} Full Interior Cleaning</Link><br />
                <Link href="/bio" style={{color: window.location.href.endsWith('bio') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('bio') ? '> ' : ''} Bio Hazard/Odor Cleaning</Link><br />
                <Link href="/headliners" style={{color: window.location.href.endsWith('headliners') ? 'blue' : 'black'}} className={'service-link'}>{window.location.href.endsWith('headliners') ? '> ' : ''} Headliners</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Our Pricing</h2>
          <h4>Our basic prices are shown below, final pricing may vary based on your vehicle size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">All Vehicles</h4>
              <p className="example-vehicle">(Any Size)</p>
              <p className="pricing-price">$40 - $80</p>
            </div>
          </div>

          <h4>Interested? Click "Get Started" on the bottom right of your screen to get in touch!</h4>

        </div>
      </div>
    </section>
  )
}
