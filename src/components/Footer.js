import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import {AiFillInstagram} from 'react-icons/ai'
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_container_first">
        <div className="footer_container_left">
          <p className="footer_container_left_para">Ready to get started ?</p>
          <p className="footer_container_left_para"> Talking to us Today</p>
        </div>
        <div className="fototer_container_right">
          <NavLink>
            <button className="footer_submit_btn">Get Started</button>
          </NavLink>
        </div>
      </div>
      <div className="footer_container_second">
        <div className="footer_container_second_1">
          <h5> Dilip Technical</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Placeat,fugiat.
          </p>
        </div>
        <div className="footer_container_second_2">
          <div>
            <h5
              className="footer_container_second_2_h5
            "
            >
              Subscribe to get important updates
            </h5>
          </div>
          <div>
            <input type="text" placeholder="YOUR E-MAIL" />
          </div>
          <div>
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer_container_second_3">
          <div>
            <h5>Follow Us</h5>
          </div>
          <div className="footer_container_second_3_in">
            <div className="footer_icons">
              <a href="https://www.instagram.com/suray_vansi_08">
                <AiFillInstagram size={"2rem"} />
              </a>
            </div>
            <div className="footer_icons2">
              <a href="https://www.linkedin.com/in/dilipsinghnaruka/">
                <AiFillLinkedin size={"2rem"} />
              </a>
            </div>
            <div className="footer_icons2">
              <a href="https://www.instagram.com/suray_vansi_08">
                <RiFacebookCircleLine size={"2rem"} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_container_second_4">
          <h5>Call Us</h5>
          <p>+91 123456789</p>
        </div>
      </div>
      <div className="footer_container_third">
        <hr />
        <p>@2023 Dilip Singh . All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
