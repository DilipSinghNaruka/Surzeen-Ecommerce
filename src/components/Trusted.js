import React from 'react'
import "./Trusted.css";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineAmazon } from "react-icons/ai";
import { SiAccenture } from "react-icons/si";
import { AiFillApple } from "react-icons/ai";
import { SiNetflix } from "react-icons/si";

export default function Trusted() {
  return (
    <>
      <div className="trusted_container">
        <div className="trusted_top"> Trusted By 1000+ Companies</div>

        <div className="trusted_icons">
          <div className="trusted_icons_first">
            <FcGoogle size={"1.5rem"} />
          </div>
          <div className="trusted_icons_second">
            <AiOutlineAmazon size={"1.5rem"} />
          </div>
          <div className="trusted_icons_third">
            <SiAccenture size={"1.5rem"} />
          </div>
          <div className="trusted_icons_fouth">
            <AiFillApple size={"1.5rem"} />
          </div>
          <div className="trusted_icons_fifth">
            <SiNetflix size={"1rem"} />
          </div>
        </div>
      </div>
    </>
  );
}
