import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full pb-8 ">
      <div className="container-wrapper mt-8 ">
        <div className="flex justify-between flex-col sm:flex-row">
          <div className="mt-8 flex items-center justify-center gap-2">
          <p className="font-groot-one text-white">
                Copyright 2024 SylvesterSol. All Rights Reserved.
              </p>

          </div>

          <div className="mt-8  flex justify-center flex-col sm:flex-row items-center space-x-6">
            <div>
             
            </div>
            <div className="flex items-center space-x-4 text-xl [&_a:hover]:opacity-70">
              <a target="_blank" href="https://twitter.com/SpongeSolll">
                <FaTwitter fill="#fff" />
              </a>
              <a target="_blank" href="https://t.me/spongesoll">
                <FaTelegram fill="#fff" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
