import React from "react";

import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <button type="button">Request Early Access</button>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>28 Ltg Dato Dagang Taman Sentosa, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Website</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>28 Ltg Dato Dagang Taman Sentosa</p>
          <p>03-9285-7182</p>
          <p>info@gpt3.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>Copyright © 2023 Voo Keat Vun. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
