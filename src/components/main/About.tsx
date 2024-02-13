// import React from 'react'
import { pageStrings } from "../../assets/text/pageStrings";
import { imageUrls } from "../../assets/imgs/imageUrls";

const About = () => {
  return (
    <div className="bg-background my-56 mx-44 p-20 rounded-lg shadow-lg font-body text-left">
      <div>
        <div className="flex flex-row mb-14">
          <div className="w-1/2">
            <h1 className="text-4xl mb-4 text-left text-orange">{pageStrings.about.introHeader}</h1>
            <p className="text-lg leading-10">{pageStrings.about.introP1}</p>
            <p className="text-lg leading-10">{pageStrings.about.introP2}</p>
          </div>
          <div className="float-right">
            <img
              src={imageUrls.fall_creek}
              alt=""
              id="fallCreek"
              className="rounded-full w-[500px] h-[500px] border-[20px] border-orange"
            />
          </div>
        </div>
        <div className="clearfix"></div>
        <div>
          <h1 className="text-4xl text-orange text-right mb-4">{pageStrings.about.journeyHeader}</h1>
          <p className="text-lg leading-10">{pageStrings.about.journeyP1}</p>
          <p className="text-lg leading-10">{pageStrings.about.journeyP2}</p>
          <p className="text-lg leading-10">{pageStrings.about.journeyP3}</p>
          <p className="text-lg leading-10">{pageStrings.about.journeyP4}</p>
          <p className="text-lg leading-10">{pageStrings.about.journeyP5}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
