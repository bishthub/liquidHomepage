import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function TeamImage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="mt-5">
      <div className="margin-full">
        <div className="row bg-white opacity-less">
          <div className="col-lg-4">
            <img
              data-aos="zoom-in-up"
              src="/images/asset_2.png"
              alt="bear"
              width={300}
            />
          </div>
          <div className="col-lg-4">
            <img
              data-aos="zoom-in-up"
              src="/images/asset_3.png"
              alt="lion"
              width={300}
            />
          </div>
          <div className="col-lg-4">
            <img
              data-aos="zoom-in-up"
              src="/images/asset_4.png"
              alt="deer"
              width={300}
            />
          </div>
        </div>
      </div>

      <div className="row p-3 "></div>
      <div className="margin-full">
        <div className="row bg-white opacity-less pt-2 pb-5">
          <div className="col-lg-4 ">
            <p> Brendan-Lead Training</p>
          </div>
          <div className="col-lg-4">
            <p> Sam - Market Research</p>
          </div>
          <div className="col-lg-4">
            <p> Jorge-TA Guru</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamImage;
