import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import cover from '../../assets/imgs/fullIntExCover.jpg';

const steps = [
  ["Wash Vehicle", "Thorough strip wash top to bottom including the gas door with the 2 bucket method or using a Foam Cannon."],
  ["Wheel Cleaing", "Clean wheels, wheel wells, wheel barrels."],
  ["Wax Prep - Clay Bar", "Clay bar the whole vehicle so was properly adheas and paint is smooth."],
  ["Wax Prep - Iron Decontamination", "Iron Decontamination to make sure everything is off of the paint, this improves wax adhesion as well."],
  ["Dry Vehicle", "Dry the whole vehicle with Supple towels and Air blowers."],
  ["Wax On", "Apply Griots 3 in 1 Ceramic Spray Wax (Best in the Industy, trust us)."],
  ["Door Jambs", "Clean Door Jambs."],
  ["Dress Vehicle", "Dress all plastics, wheel wells, tires."]
]

export default function PDLWash() {
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
      <h1 className='servicepage-header'>Premium Dirt-Less Wash</h1>

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
                <Link to="/single-paint-correction" style={{color: window.location.href.endsWith('single-paint-correction') ? 'blue' : 'black'}} className={'service-link'}>{window.location.href.endsWith('single-paint-correction') ? '> ' : ''} Single Stage Paint Correction</Link>
                <Link to="/two-paint-correction" style={{color: window.location.href.endsWith('two-paint-correction') ? 'blue' : 'black'}} className={'service-link'}>{window.location.href.endsWith('two-paint-correction') ? '> ' : ''} Two Stage Paint Correction</Link>
              </div>
            </div>
            <HashLink smooth to="/#contact" className="quote-btn top-quote-btn service-page-quote-btn">Contact Us</HashLink>
          </div>
        </div>

        <div>
          <h2>Premium Dirt-Less Wash Pricing</h2>
          <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">Small</h4>
              <p className="example-vehicle">Small cars and mini trucks</p>
              <p className="pricing-price">$150</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Medium</h4>
              <p className="example-vehicle">Mid size SUV's, and most Wagons</p>
              <p className="pricing-price">$200</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Large</h4>
              <p className="example-vehicle">Big SUV's and Big trucks</p>
              <p className="pricing-price">$250</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Extra Large</h4>
              <p className="example-vehicle">Massive trucks and above</p>
              <p className="pricing-price">$275</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
