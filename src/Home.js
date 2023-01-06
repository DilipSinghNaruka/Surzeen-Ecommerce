import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services';
import Trusted from './components/Trusted';
import './Home.css'

function Home() {
  const data = {
    name: "Dilip's Store",
  };
  return (
    <div className='home_container'>
      
      <HeroSection myData={data} />
      <Services/>
      <Trusted/>
    </div>
  );
}

export default Home