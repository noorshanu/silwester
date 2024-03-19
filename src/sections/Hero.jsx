function Hero() {
  return (
    <section className=" pt-8  pb-[4rem] ">
      <div className="container-wrapper">
        <h1 className=" font-groot-one text-2xl text-center sm:text-5xl font-semibold my-4 max-w-full sm:max-w-5xl mx-auto text-[#000]">
          SpongSol: Making Waves in the Solana Sea with Memes!
        </h1>
        <div className="relative z-50">
          <div className=" flex justify-between flex-col sm:flex-row items-center ">
            <div className=" w-full">
              <img src="images/hero2.png" alt="" />
            </div>

            <div className=" max-w-2xl bg-[#42e2e7c5] py-8 px-4 rounded-3xl border-2 border-[#ffc93b]">
              <h2 className=" text-lg text-black font-semibold">
                Welcome to spongSol, the most bubbly and optimistic meme coin
                on Solana! Just like spongBob, we're all about fun, friendship,
                and making waves in the crypto world. Join us in Bikini Bottom
                for meme creation, staking, and endless water adventures!
              </h2>
              <div className=" py-2">
                <a
                  href="https://solscan.io/token/4R9VUGpg7jCcV1MnqNQubQUjKKR3oL7XB85oAuB3FwXF"
                  target="_blank"
                  className="my-2 font-groot-two flex justify-start text-xs  text-black  sm:text-xl font-bold "
                >
                  {" "}
                  Contract : 4R9VUGpg7jCcV1MnqNQubQUjKKR3oL7XB85oAuB3FwXF
                </a>
              </div>

              <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
                <a
                  href="https://t.me/spongesoll"
                  target="_blank"
                  className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#e8e6c9] shadow-lg shadow-black/40 text-[#473314]  font-bold border-[#ffc93b] border-2"
                >
                  join telegram
                </a>

                <a
                  href="https://www.dextools.io/app/en/solana/pair-explorer/F9iRyJMDcMwwAUEd4zm7dezrivZNMqmgD4Dpchb4yF1A?t=1710791481197"
                  target="_blank"
                  className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#e8e6c9] shadow-lg shadow-black/40 text-[#473314]  font-bold  border-[#ffc93b] border-2"
                >
                  DEXTOOLS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
