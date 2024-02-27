import React from "react";

function Section1({ award, awardRecieve }) {
  return (
    <section className="section-1">
      <div className="hero">
        {/* <div className="award"> */}
        <img className="img-award" src={award} alt="award" />
        {/* </div> */}
        <div className="award-recive">
          <div className="content-main">
            <h3 className="content-heading">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h3>
            <p className="content-text2">
              &nbsp;&nbsp;&nbsp;&nbsp;• C.R.I.'s energy efficient products are
              well recognized by various Government Institutions, as trustworthy
              products for various projects across the globe to save energy.{" "}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;• C.R.I. is the highest contributor in the
              country for the projects of EESL (Energy Efficiency Services
              Limited) to replace the old inefficient pumps with 5 Star rated
              energy efficient smart pumps with IoT enabled control panel.
            </p>
          </div>
          <img className="img-awardRecive" src={awardRecieve} alt="image" />
          <p className="content-text3">
            Government of India has awarded the
            <span className="bold-text">
              "National Energy Conservation Award 2018"
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section1;
