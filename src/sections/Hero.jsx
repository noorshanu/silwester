import { FaTwitter, FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className=" pt-4  pb-[4rem] ">
      <div className="container-wrapper">
      
        <div className="relative z-50">
          <div className=" flex justify-between flex-col sm:flex-row items-center ">
       

            <div className=" max-w-2xl  py-8 px-4 rounded-3xl border-2 border-[#ffffff]">
            <h1 className="font-groot-one text-lg sm:text-3xl py-2 ">
         Welcome to SylvesterSol, the most bubbly and optimistic meme coin!
         </h1>
              <h2 className=" text-lg text-[#ffc93b] font-semibold ">
            optimistic meme coin
                on Solana! Just like spongBob, we're all about fun, friendship,
                and making waves in the crypto world. Join us in Bikini Bottom
                for meme creation, staking, and endless water adventures!
              </h2>
              <div className=" py-2">
                <a
                  href="https://solscan.io/token/4R9VUGpg7jCcV1MnqNQubQUjKKR3oL7XB85oAuB3FwXF"
                  target="_blank"
                  className="my-2 font-groot-two flex justify-start text-xs  text-[#ffc93b] sm:text-xl font-bold "
                >
                  {" "}
                  Contract : 4R9VUGpg7jCcV1MnqNQubQUjKKR3oL7XB85oAuB3FwXF
                </a>
              </div>

              <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
              <a
                  href="https://www.dextools.io/app/en/solana/pair-explorer/F9iRyJMDcMwwAUEd4zm7dezrivZNMqmgD4Dpchb4yF1A?t=1710791481197"
                  target="_blank"
                  className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#f02c2f] shadow-lg shadow-black/40 text-[#ffffff]  font-bold  border-[#ffffff] border-2"
                >
                  DEXTOOLS
                </a>
               
            
                <div className="flex items-center space-x-4 text-xl [&_a:hover]:opacity-70">
            <a target="_blank" href="https://twitter.com/SylvesterSolll" className=" text-4xl">
              <FaTwitter fill="#fff" />
            </a>
            <a target="_blank" href="https://t.me/SylvesterSoll" className=" text-4xl">
              <FaTelegram fill="#fff" />
            </a>
          </div>
            
              </div>
            </div>

            <div className=" w-full">
              <img src="images/hero2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
