import React from "react";

function Logo({ logo }) {
  return (
    <div className="logo">
      <img className="img-logo" src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
