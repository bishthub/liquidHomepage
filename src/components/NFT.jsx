import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function NFT(props) {
  const [counterOn, setCounterOn] = useState(true);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        // onExit={() => setCounterOn(false)}
      >
        <div className=" margin-full">
          <div className="bg-white opacity-less">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <h2 className="mt-3" style={{ color: `${props.color}` }}>
                    {" "}
                    {props.title}
                  </h2>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      {counterOn && (
                        <CountUp
                          className="text-large"
                          start={0}
                          end={props.cost}
                          duration={4}
                          enableScrollSpy
                        />
                      )}
                      <p className="display-only-none">USDT mining cost</p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      {counterOn && (
                        <CountUp
                          className="text-large"
                          start={0}
                          end={props.supply}
                          duration={4}
                          enableScrollSpy
                        />
                      )}
                    </div>
                    <p className="display-only-none">Total supply</p>
                  </div>
                  <div className="row display-none">
                    <div className="col-lg-6 col-sm-12">USDT mining cost</div>
                    <div className="col-lg-6 col-sm-12">Total supply</div>
                  </div>
                  <div className="row ">
                    <div className="col-lg-6 col-sm-6">
                      {counterOn && (
                        <CountUp
                          className="text-large"
                          start={0}
                          end={props.equity}
                          duration={4}
                          enableScrollSpy
                        />
                      )}
                      <p className="display-only-none">USDT equity</p>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      {counterOn && (
                        <CountUp
                          className="text-large"
                          start={0}
                          end={props.perks}
                          duration={4}
                          enableScrollSpy
                        />
                      )}
                    </div>
                    <p className="display-only-none">additional perks</p>
                  </div>
                  <div className="row mb-4 display-none">
                    <div className="col-lg-6 col-sm-6">USDT equity</div>
                    <div className="col-lg-6 col-sm-6">additional perks</div>
                  </div>
                </div>
                <div className="col-lg-4 fixedDiv">
                  <img
                    src={props.image}
                    alt="bear"
                    className="imagesBear"
                    style={{
                      boxShadow: " 0 0 25px white, 0 0 5px white",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}
