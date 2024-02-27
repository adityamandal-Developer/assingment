import React from "react";

function Section2({ products }) {
  return (
    <section className="section-2">
      <div className="products">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.{" "}
        </p>
        <img className="img-products" src={products} alt="product-image" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr className="line" width="99.80%" color="red" size="5"></hr>
        <p className="bold-text content-text4">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <div className="product-list">
          CHEMICALS & PROCESS<span className="|">|</span>POWER
          <span className="|">|</span>WATER & WASTE WATER
          <span className="|">|</span>OILS & GAS<span className="|">|</span>
          PHARMA <span className="|">|</span>SUGARS & DISTILLERIES
          <span className="|">|</span>PAPER & PULP
          <span className="|">|</span>MARINE & DEFENCE
          <span className="|">|</span>METAL & MINING
          <span className="|">|</span>FOOD & BEVERAGE
          <span className="|">|</span>
        </div>
        <div className="product-list">
          PETROCHEMICAL & REFINERIES
          <span className="|">|</span>SOLAR<span className="|">|</span>
          BUILDING<span className="|">|</span>HVAC
          <span className="|">|</span>FIRE FIGHTING
          <span className="|">|</span>AGRICULTURE & RESIDENTIAL
        </div>
      </div>
    </section>
  );
}

export default Section2;
