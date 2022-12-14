import React from 'react'
import Link from 'next/link';

import cover from '../../assets/imgs/addonsCover.webp';

const waterSpotSteps = [
    ["Waterspot/Overspray Removal", "Remove all overspray and waterspots we can."]
  ]

const glassSteps = [
    ["Clean Glass", "Remove all scratches, etching, and watermarks possible."]
]

export default function Addons() {
    const waterspotContent = waterSpotSteps.map((item, id) => {
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

    const glassContent = glassSteps.map((item, id) => {
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
      <h1 className='servicepage-header'>Addons</h1>

      <div className='separator-container'>
        <h2 className='service-title'>WATERSPOT/OVERSPRAY REMOVAL</h2>
      </div>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <p>This can be added onto any of our Exterior or Paint Correction Services when contacting us.</p>
            <h2>Our Process</h2>
            <ol className='list'>
              {waterspotContent}
            </ol>
          </div>
        </div>
        <Link href="/#contact" className="quote-btn top-quote-btn service-page-quote-btn">Get Started</Link>

        <div>
          <h2>Our Pricing</h2>
          <h4>This services' pricing is based on an hourly rate.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">All Vehicles</h4>
              <p className="example-vehicle">(Any Size)</p>
              <p className="pricing-price">$60/hour</p>
            </div>
          </div>

          <h4>Interested? Click "Get Started" on the bottom right of your screen to get in touch!</h4>

        </div>
      </div>

      <div style={{marginTop: 75}} className='separator-container'>
        <h2 className='service-title'>GLASS POLISHING</h2>
      </div>
      
      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <p>This can be added onto either of our Paint Correction Services when contacting us.</p>
            <h2>Our Process</h2>
            <ol className='list'>
              {glassContent}
            </ol>
          </div>
        </div>

        <div>
          <h2>Our Pricing</h2>
          <h4>This services' pricing is based on an hourly rate.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">All Vehicles</h4>
              <p className="example-vehicle">(Any Size)</p>
              <p className="pricing-price">$70/hour</p>
            </div>
          </div>

          <h4>Interested? Click "Get Started" on the bottom right of your screen to get in touch!</h4>

        </div>
      </div>
    </section>
  )
}
