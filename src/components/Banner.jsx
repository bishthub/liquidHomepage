import React from "react";
import Typewriter from "typewriter-effect";
function Banner() {
  return (
    <div>
      <div className="max-width100 row">
        <div className="col-lg-8">
          <h1 className="huge-text mt-5">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Supercharged investment on autopilot.")
                  // .pauseFor(1000)
                  // .deleteAll()
                  // .typeString("Welcomes You")
                  .start();
              }}
            />
            {/* <br /> investment on <br /> autopilot. */}
          </h1>
        </div>
        <div className="col-lg-4">
          <img src="/images/asset_5.png" className="imgnew " alt="" />
        </div>

        <div className="imagesSet">
          <img
            src="/images/Binance-Smart-Chain.png"
            width={200}
            height={200}
            className="binance"
            alt="binance"
          />
          <img
            src="/images/Bybit-logo.png"
            width={200}
            height={70}
            className="bybit"
            alt="bybit"
          />
          <img
            src="/images/Binance-Logo.wine.png"
            width={200}
            height={200}
            className="bsc"
            alt="bsc"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
