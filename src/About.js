import React from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/productcontex';

function About() {
  const myName = useProductContext();
  const data = {
    name : "Dilip Ecommerce",
  }
  return (
    <div>
      {myName}
      <HeroSection myData={data} />
    </div>
  );
}

export default About