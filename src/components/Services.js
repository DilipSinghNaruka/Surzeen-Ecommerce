import React from "react";
import "./Services.css";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

function Services() {
  return (
    <>
      <div className="services_contrainer">
        <div className="services_Left">
          <div className="services_Left_icon">
            <TbTruckDelivery size={"2rem"} />
          </div>
          <p className="para">Super Fast and Free Delivery</p>
        </div>

        <div className="services_middel">
          <div className="services_middel_top">
            <div className="services_middel_top_icon">
              <MdOutlineSecurity size={"2rem"} />
            </div>
            <p>Non-contact Shipping</p>
          </div>
          <div className="services_middel_bottom">
            <div className="services_middel_bottom_icon">
              <GiPayMoney size={"2rem"} />
            </div>
            <p>Money-back Guaranteed</p>
          </div>
        </div>

        <div className="services_right">
          <div className="services_right_icon">
            <RiSecurePaymentLine size={"2rem"} />
          </div>
          <p className="para">Super Secure Payment System</p>
        </div>
      </div>
    </>
  );
}

export default Services;
