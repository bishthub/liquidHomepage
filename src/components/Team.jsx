import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Team() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="mt-10" id="team">
      <div data-aos="fade-right" className="row text-left">
        <div className="col-lg-6">
          <h1>TEAM</h1>
          <h6>
            Liquid Leverage’s team has many decades of cumulative experience in
            both traditional and crypto markets
          </h6>

          <p className="mt-5">
            With some of our traders still working full time or consulting for
            some of the biggest edge funds, financial institutions and equity
            leading market making firms around the USA and Europe.
          </p>
          <p className="mt-5">
            The identity of our traders will only be disclosed via the private
            discord access given to anyone holding a Liquid Leverage NFT. A non
            disclosure agreement will be provided to members that wish to
            receive KYC information from our trading team as well as the KYC
            information provided to the centralised exchanges used by Liquid
            Leverage
          </p>
          <p className="mt-5">
            The team is currently composed of 9 Traders, 4 Research Analysts and
            4 Technical Analysts
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
