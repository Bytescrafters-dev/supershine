"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col xl:flex-row items-center justify-between px-10 xl:px-20 mt-28 xl:mt-64 w-full z-20 gap-10"
    >
      <div className="flex flex-col gap-5 justify-center text-start flex-1">
        <motion.div
          variants={slideInFromTop}
          className="py-[15px] px-1 opacity-[0.9] "
        >
          <div className="flex gap-8">
            <div className="flex">
              <CursorArrowRaysIcon className="text-gray-300 mr-2.5 h-4 xl:h-7 w-4 xl:w-7" />
              <h1 className="welcome-text font-bold text-red-700 shadow text-md xl:text-3xl">
                Your Car
              </h1>
            </div>
            <div className="flex">
              <CursorArrowRaysIcon className="text-gray-300 mr-2.5 h-4 xl:h-7 w-4 xl:w-7" />
              <h1 className="welcome-text font-bold text-red-700 shadow text-md xl:text-3xl">
                Your Location
              </h1>
            </div>
            <div className="flex">
              <CursorArrowRaysIcon className="text-gray-300 mr-2.5 h-4 xl:h-7 w-4 xl:w-7" />
              <h1 className="welcome-text font-bold text-red-700 shadow text-md xl:text-3xl">
                Our Shine
              </h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-1 xl:gap-6 mt-2 xl:mt-6 text-3xl xl:text-7xl text-white  font-semibold w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-900 to-red-500 bg-white/90 px-2 py-1 rounded">
              Premium Mobile
            </span>
          </span>
          <span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-900 to-red-500 bg-white/90 px-2 py-1 rounded">
              Car Detailing in Melbourne
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm xl:text-xl xl:w-2/3 text-gray-100 my-5 mr-0 xl:mr-20"
        >
          Super Shine provides fully mobile car wash & detailing services across
          Melbourne. Experience professional mobile car detailing delivered to
          your doorstep. We restore, protect, and elevate your vehicle — without
          disrupting your day.
        </motion.p>

        <motion.div variants={slideInFromLeft(1)} className="flex gap-8">
          <button className="py-2 px-5 button-secondary text-center text-white cursor-pointer  rounded-lg max-w-[200px]">
            Explore Services
          </button>
          <button className="py-2 px-5 button-primary text-center text-white cursor-pointer  rounded-lg max-w-[200px]">
            Book Appointment
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
