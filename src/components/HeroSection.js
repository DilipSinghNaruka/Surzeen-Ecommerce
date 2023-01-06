import React from 'react'
import { NavLink } from 'react-router-dom';
import Hero_section from "../Images/Hero_section.jpg";
// import Products from "../Products"
import './HeroSection.css'

function HeroSection({myData}) {
    const {name} = myData;
  return (
    <>
      <div className="herosection_container">
        <div className="herosection_left">
          <p>WELCOME TO </p>
          <h2>{name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            sunt laudantium expedita consequatur deserunt. Laudantium officia
            error fugit ut unde, accusantium id optio alias atque quasi. Ratione
            explicabo repellat cupiditate?
          </p>
          
          <NavLink to='/products'>

          <button className='button'>Show Now</button>
          </NavLink>
        </div>
        <div className="herosection_right">
          <img
            src={Hero_section}
            alt="Main img"
            className="herosection_right_img"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection