import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="">
      <h1 className="align-right">ABOUT US</h1>
      <div className="row">
        <div className="col-lg-6 col-sm-4">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="" src="/images/1_10.jpg" width={300} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="" src="/images/1_8.jpg" width={300} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="" src="/images/1_9.jpg" width={300} alt="" />
            </SwiperSlide>
          </Swiper>

          {/* <div className="">
            <img
              className=""
              src="/images/1_8.jpg"
              width={300}
              style={{
                height: "auto",
                opacity: "0.5",
                right: "71vw",
                transform: " rotatey(-30deg)",
                zIndex: "-1 ",
                boxShadow: " 0 0 25px white, 0 0 5px white",
              }}
            />
            <img
              className=""
              src="/images/1_1.jpg"
              width={300}
              style={{
                zoom: "1.2",
                height: "auto",

                boxShadow: " 0 0 25px white, 0 0 5px white",
              }}
            />
            <img
              className=""
              src="/images/1_8.jpg"
              width={300}
              style={{
                opacity: "0.5",
                height: "50",

                right: "54vw",
                zIndex: "-1 ",
                transform: " rotatey(-30deg)",
                boxShadow: " 0 0 25px white, 0 0 5px white",
              }}
            />
          </div> */}
        </div>

        <div data-aos="fade-left" className="col-lg-6 align-right">
          <p className="mt-5">
            Liquid Leverage NFTs offers the first and only decentralised equity
            fund, fully traded by industry professionals on futures
            cryptocurrency markets.
          </p>
          <p className="mt-5">
            The funds generated from NFT minting are added to the trading team’s
            futures portfolio. At the end of every week, the profits generated
            are removed from the centralised exchange and distributed to the
            holders of the NFT according to the value of the NFT equity they
            own.
          </p>
          <p className="mt-5">
            With years of proven wealth generation using edged trading
            strategies, we project an average of 4.5% return on investment,
            weekly The minimum guaranteed return is 1% weekly. Extreme market
            volatility can see the ROI soar up to 15% weekly. No matter what
            direction the market turns.
          </p>
          <p className="mt-5">
            With an extremely limited supply, we want to limit our footprint on
            the market and keep our holder’s circle exclusive.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row mt-10">
          <iframe
            className="mt-16 w-full"
            height={720}
            title="ytVideo"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
