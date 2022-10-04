import React from "react";
import NFT from "./NFT";

export default function TheNFT() {
  return (
    <div className="mt-10 bgnew">
      <h1 className="text-left">THE NFTs</h1>
      <NFT
        title="Bearish NFT"
        color="Red"
        cost="550"
        equity="500"
        supply="600"
        perks="2"
        image="/images/1_10.jpg"
      />
      <div className="mt-10"></div>
      <NFT
        title="Bullish NFT"
        color="green"
        cost="1350"
        equity="1300"
        supply="350"
        perks="3"
        image="/images/1_9.jpg"
      />
      <div className="mt-10"></div>
      <NFT
        title="Market maker"
        color="yellow"
        cost="10000"
        equity="9900"
        supply="20"
        perks="5"
        image="/images/1_8.jpg"
      />

      {/* <div className="col-lg-3 ">
        <NFT
          title="Bearish NFT"
          color="Red"
          cost="550"
          equity="500"
          supply="600"
          perks="2"
        />
        <NFT
          title="Bullish NFT"
          color="green"
          cost="550"
          equity="500"
          supply="600"
          perks="2"
        />
        <NFT
          title="Market maker"
          color="yellow"
          cost="550"
          equity="500"
          supply="600"
          perks="2"
        />
      </div> */}
    </div>
  );
}
