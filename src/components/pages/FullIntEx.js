import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

import cover from '../../assets/imgs/fullIntExCover.jpg';

const steps = [
  "Thouroughly vacuum every crack and crevice of the vehicle",
  "Use our Tornador Vortex blowgun which uses compressed air to blow out every spot a vacuum can't reach, it also extracts sand and loose soil from carpeting (Most detailers don't do this).",
  "We use a professional hot water extractor and professional flex stain remover and alkaline floor rinse to keep floors at a neutral PH level. (Another thing other detailers won't do). We will be sure to get all carpets, floor mats, and cloth seats",
  "Clean, steam, and degrease all plastics and leather seats",
  "Dress all vinyl and leather (if wanted)",
  "Clean all of the door jambs",
  "Clean windows",
]

export default function FullIntEx() {
  const content = steps.map((item, id) => {
    return (
      <li key={id} className="item">
        <h3>Step {id + 1}{id === 2 ? <span className='special-package'>*</span> : ""}:</h3>
        <p>{item}</p>
      </li>
    )
  })
  return (
    <section className='content-container'>
      <div className='main-content-container'>
        <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
        <h1 className='servicepage-heading'>Full Interior Cleaning</h1>
        <h2>Our Interior Cleaning Process</h2>
        <ol className='list'>
          {content}
        </ol>
        <h4><span className='special-package'>*</span>Extraction Package Only</h4>
        <h4>*Headliners not included*</h4>

        <h2>Full Interior Without Extraction Pricing</h2>
        <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
        <div className="pricing-container">
          <div className="pricing-card">
            <h4 className="size">Small</h4>
            <p className="example-vehicle">2 Door Coupes, Single and Extended Cabs</p>
            <p className="pricing-price">$200</p>
          </div>
          <div className="pricing-card">
            <h4 className="size">Medium</h4>
            <p className="example-vehicle">4 Door Sedans, 4 Door Trucks, Smaller SUV's</p>
            <p className="pricing-price">$250</p>
          </div>
          <div className="pricing-card">
            <h4 className="size">Large</h4>
            <p className="example-vehicle">Big SUV's and 3 Row SUV's</p>
            <p className="pricing-price">$300</p>
          </div>
        </div>

        <h2>Full Interior With Extraction Pricing</h2>
        <div className="pricing-container">
          <div className="pricing-card">
            <h4 className="size">Small</h4>
            <p className="example-vehicle">2 Door Coupes, Single and Extended Cabs</p>
            <p className="pricing-price">$250</p>
          </div>
          <div className="pricing-card">
            <h4 className="size">Medium</h4>
            <p className="example-vehicle">4 Door Sedans, 4 Door Trucks, Smaller SUV's</p>
            <p className="pricing-price">$300</p>
          </div>
          <div className="pricing-card">
            <h4 className="size">Large</h4>
            <p className="example-vehicle">Big SUV's and 3 Row SUV's</p>
            <p className="pricing-price">$350</p>
        </div>
        </div>
      </div>
      <aside className='service-aside'>
        <h3>Other Interior Services</h3>
        <div className="aside-links">
          <Link to="/full-int-ex" className='service-link'>{window.location.href === 'full-int-ex' ? '> ' : ''} Full Interior Cleaning</Link>
          <Link to="/bio" className='service-link'>{window.location.href === 'bio' ? '> ' : ''} Bio Hazard/Odor Cleaning</Link>
          <Link to="/headliners" className='service-link'>{window.location.href === 'headliners' ? '> ' : ''} Headliners</Link>
        </div>
      </aside>
    </section>
  )
}