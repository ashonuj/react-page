import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
    <video autoPlay muted>
    <source src="/videos/video1.mp4" type="video/mp4"/>
    </video>
      <h1 className='paragraph-heading'>ASHONUJ CHEMICALS</h1>
      <p className='paragraph'>We are pleased to introduce you Ashonuj Chem Pvt. Ltd. (est.2000) <br></br>
       as a leading manufacturer of high purity solvents.<br></br>
       We market all the products manufactured by us under the brand, “APCHEM”.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          GET IN TOUCH <i className='far fa-touch' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;