import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function NFT(props) {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
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
                    <div class="col-lg-6 col-sm-12">
                      {counterOn && (
                        <CountUp
                          className="text-large"
                          start={0}
                          end={props.cost}
                          duration={2.75}
                          enableScrollSpy
                        />
                      )}
                    </div>
                    <div class="col-lg-6 col-sm-12">
                      {counterOn && (
                        <CountUp
                          className="text-large"
                          start={0}
                          end={props.supply}
                          duration={2.75}
                          enableScrollSpy
                        />
                      )}
                    </div>
                  </div>
                  <div className="row ">
                    <div class="col-lg-6 col-sm-12">USDT mining cost</div>
                    <div class="col-lg-6 col-sm-12">Total supply</div>
                  </div>
                  <div className="row ">
                    <div class="col-lg-6 col-sm-6">
                      {counterOn && (
                        <CountUp
                          className="text-large"
                          start={0}
                          end={props.equity}
                          duration={2.75}
                          enableScrollSpy
                        />
                      )}
                    </div>
                    <div class="col-lg-6 col-sm-6">
                      {counterOn && (
                        <CountUp
                          className="text-large"
                          start={0}
                          end={props.perks}
                          duration={1.75}
                          enableScrollSpy
                        />
                      )}
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div class="col-lg-6 col-sm-6">USDT equity</div>
                    <div class="col-lg-6 col-sm-6">additional perks</div>
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