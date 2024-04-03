import { FaTwitter, FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className=" pt-4  pb-[4rem] ">
      <div className="container-wrapper">
        <div className="relative z-50">
          <div className=" flex justify-between flex-col sm:flex-row items-center ">
            <div className=" max-w-2xl  py-8 px-4 rounded-3xl border-2 border-[#ffffff]">
              <h1 className="font-groot-one text-lg sm:text-3xl py-2 ">
                Leo<span className="text-[#fd6b02] font-groot-one">Cat </span> : Meme Magic on the Rise with LeoCat !
              </h1>
              <h2 className=" text-lg text-[#ffffff] font-semibold ">
                Enter the zany world of LeoCat – where LeoCat's cunning
                meets LeoCat charm in a crypto adventure like no other! Just
                like LeoCat's , LeoCat embodies
                persistence, pride, and a whole lot of meme magic. Get ready for
                a wild ride to the moon and beyond!
              </h2>
              <div className=" py-2">
                <a
                  href="https://solscan.io/token/3y58rFpZHLTMiEMNsGQrVv9eDQg5482BbUWdwNMV1eE2"
                  target="_blank"
                  className="my-2 font-groot-two flex justify-start text-xs  text-[#fd6b02] sm:text-xl font-bold "
                >
                  {" "}
                  Contract : 3y58rFpZHLTMiEMNsGQrVv9eDQg5482BbUWdwNMV1eE2
                </a>
              </div>

              <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
                <a
                  href="#"
                  target="_blank"
                  className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#fd6b02] shadow-lg shadow-black/40 text-[#000000]  font-bold  border-[#ffffff] border-2"
                >
                  DEXTOOLS
                </a>

                <div className="flex items-center space-x-4 text-xl [&_a:hover]:opacity-70">
                  <a
                    target="_blank"
                    href="https://twitter.com/Leo_cat9"
                    className=" text-4xl"
                  >
                    <FaTwitter fill="#fd6b02" />
                  </a>
                  <a
                    target="_blank"
                    href="https://t.me/leocatsol"
                    className=" text-4xl"
                  >
                    <FaTelegram fill="#fd6b02" />
                  </a>
                </div>
              </div>
            </div>

            <div className=" w-full">
              <img src="images/hero2.png" alt="" className=" px-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
