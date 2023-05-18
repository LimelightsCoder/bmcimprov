import React from "react";
import highlightVideo1 from "/Media/bmchighlight.mp4";

const Highlights = () => {
  return (
    <div className="flex w-full justify-center items-center my-18 pb-12 pt-36 ">
      <div className="flex mf:flex-row flex-col items-start justify-between mf:p-20 py-12 px-4">
        <div className="flex flex-1 justify-center flex-col mf:mr-10 ml-10">
          <h1 className="text-center justify-center items-center flex sm:text-9xl text-[#0d0630] py-2 text-7xl gothic ">
          <span className="responsive-text  justify-between items-center flex text-center">HIGHLIGHTS</span>
          </h1>
        </div>
        <div className=" justify-center items-center flex flex-col">
          <video src={highlightVideo1} controls></video>
          <h2>
            2023 Highlights!
            <a href="https://linktr.ee/bmcimprov" style={{color: "#8338EC"}}> Check out more!</a>
          </h2>
        </div>

      </div>
    </div>
  );
};

export default Highlights;
