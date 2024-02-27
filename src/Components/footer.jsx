import React from "react";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="contact">
          <div className="call">
            <div className="inner">
              <IoCall className="icon" />
              <h3 className="contact-text">Toll free 1800 200 1234</h3>
            </div>
          </div>
          <div className="facebok">
            <div className="inner">
              <FaFacebookF className="icon" />
              <h3 className="contact-text">www.facebook.com/cripumps</h3>
            </div>
          </div>
          <div className="website">
            <div className="inner">
              <BsGlobe className="icon" />
              <h3 className="contact-text">www.crigroups.com</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
