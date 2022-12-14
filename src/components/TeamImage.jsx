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
        <div className="row bg-white opacity-less height-auto">
          <div className="col-lg-4">
            <div className="fix-div">
              <img
                // className="imagesBear"
                data-aos="zoom-in-up"
                src="/images/asset_2.png"
                alt="bear"
                width={200}
              />
            </div>

            <p className="display-only-none"> Sam - Market Research</p>
          </div>
          <div className="col-lg-4">
            <div className="fix-div">
              <img
                // className="imagesBear"
                data-aos="zoom-in-up"
                src="/images/asset_3.png"
                alt="lion"
                width={200}
              />
            </div>

            <p className="display-only-none"> Sam - Market Research</p>
          </div>
          <div className="col-lg-4">
            <div className="fix-div">
              <img
                // className="imagesBear"
                data-aos="zoom-in-up"
                src="/images/asset_4.png"
                alt="deer"
                width={170}
              />
            </div>

            <p className="display-only-none"> Jorge-TA Guru</p>
          </div>
        </div>
      </div>

      <div className="row p-3 "></div>
      <div className="margin-full  display-none">
        <div className="row bg-white opacity-less pt-2 pb-5">
          <div className="col-lg-4 ">
            <p> Brendan-Lead Trading</p>
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
