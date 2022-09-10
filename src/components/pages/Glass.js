import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import cover from '../../assets/imgs/fullIntExCover.jpg';

const steps = [
  ["Clean Glass", "Remove all scratches, etching, and watermarks possible."]
]

export default function Glass() {
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
      <h1 className='servicepage-header'>Glass Polishing</h1>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2>Our Process</h2>
            <ol className='list'>
              {content}
            </ol>
            <p>This is a great addon package. This package is for cars that have excessive waterspots on glass, deeper scratches on glass, windshield wiper marks, and etching. We mask all sensitive areas off to make sure nothing sensitive gets damaged in the process</p>
          </div>

          <div className='aside-container'>
            <div className='service-aside'>
              <h3>Other Correction Services</h3>
              <div className="aside-links">
                <Link to="/single-paint-correction" style={{color: window.location.href.endsWith('single-paint-correction') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('single-paint-correction') ? '> ' : ''} Single Stage Paint Correction</Link><br />
                <Link to="/two-paint-correction" style={{color: window.location.href.endsWith('two-paint-correction') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('two-paint-correction') ? '> ' : ''} Two Stage Paint Correction</Link><br />
                <Link to="/glass" style={{color: window.location.href.endsWith('glass') ? 'blue' : 'black'}} className={'service-link'}>{window.location.href.endsWith('glass') ? '> ' : ''} Glass Polishing</Link>
                <Link to="/waterspot" style={{color: window.location.href.endsWith('waterspot') ? 'blue' : 'black'}} className={'service-link'}>{window.location.href.endsWith('waterspot') ? '> ' : ''} Overspray/Waterspot</Link>
              </div>
            </div>
            <HashLink smooth to="/#contact" className="quote-btn top-quote-btn service-page-quote-btn">Contact Us</HashLink>
          </div>
        </div>

        <div>
          <h2>PRICING</h2>
          <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <p className="example-vehicle">Any size vehicle, price is per hour spent</p>
              <p className="pricing-price">$70/hour</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
