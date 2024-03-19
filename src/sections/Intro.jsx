import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 ">
   
     
    

        <div className="  px-4  py-2 flex justify-between flex-col sm:flex-row items-center ">
          <div className=" w-full sm:w-[500px] border-[#ffc93b] border-2 rounded-2xl ">
            {/* <RoadmapCards /> */}
            <h2 className=" mt-4 text-center text-2xl  text-white font-semibold font-groot-one ">
            world of SylvesterSol
            </h2>
            <img
              src="images/hero.jpeg"
              alt=""
              className=" rounded-3xl  h-[400px] mx-auto mb-4  "
            />
          

           
          </div>
          <div className=" max-w-xl">
          <h2 className="font-groot-one text-5xl my-2 text-[#ffc93b] text-center font-bold relative z-30 -mt-4">
          About Us
        </h2>
            <p className="font-semibold font-groot-one text-xl sm:text-3xl  text-white  py-2">
              Welcome to the wild world of SylvesterSol!
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-one  text-white  font-medium">
              In the meme jungle, SylvesterSol reigns supreme with his adorable
              charm and endless memes! With his trusty sidekick, SylvesterSol
              spreads joy and laughter wherever he goes, making Solana brighter
              with every wag of his tail.
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one   text-white font-medium">
            SylvesterSol isn't your average meme coin - he's the next viral meme! Known for his cuteness, unique features, and explosive growth, SylvesterSol offers more than just memes. 
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one  text-white font-medium">
            From his hilarious antics to his groundbreaking SylvesterSol Game and pet store, SylvesterSol brings excitement and adventure to the crypto world! 
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
