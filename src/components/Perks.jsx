import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Perks() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="mt-10">
      <div className="row">
        <div data-aos="fade-right" className="col-lg-7">
          <img src="/images/asset_6.png" className="imgmax" alt="bearbull" />
        </div>

        <div data-aos="fade-left" className="col-lg-5">
          <h1 className="text-6xl text-center mt-10">PERKS</h1>
          <h3 className="text-center mt-5">
            Different tier of NFT will unlock more perks
          </h3>
          <ul className="text-center space-y-2 mt-5 inside-list">
            <li>Equity bearing NFT paying profit weekly.</li>
            <li>
              Private discord access with full view of active trades and overall
              PnL.
            </li>
            <li>Access to live tracking of portfolio growth</li>
            <li>Private access to trading signals on many USDT pairs.</li>
            <li>Private access to copy trading</li>
            <li>
              Weekly mentorship and 1 on 1 training with our most profitable
              traders.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Perks;
