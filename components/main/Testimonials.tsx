"use client";

import TestimonialCard from "../sub/TestimonialCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Shani Hewakoralage",
    rating: 5,
    link: "https://maps.app.goo.gl/FtmzqC8ZtH6m2BTd9",
    description:
      "Super Shine Detailers provided top-quality car interior cleaning. Best detailers with outstanding results. Highly recommended —one of the best detailing services!",
  },
  {
    id: 2,
    name: "Lasal Dulmika",
    rating: 5,
    link: "https://maps.app.goo.gl/mQUifoc7aF4Mq5Vp7",
    description:
      "Very impressed with the car detailing service. Interior and exterior were cleaned thoroughly, even the hard-to-reach areas. Great value for money, on time, and excellent customer service. Will definitely be coming back.",
  },
  {
    id: 3,
    name: "Senuka Herath",
    rating: 5,
    link: "https://maps.app.goo.gl/K963q1un2bnT8zSU8",
    description:
      "Good work , well organized and did a spot on job. Thanks mate!!!!",
  },
  {
    id: 4,
    name: "Jeffrey Otto",
    rating: 5,
    link: "https://maps.app.goo.gl/y89JRHq3yWAhFfLp6",
    description:
      "I would definitely recommend taking your car to super shine, i found them to be very professional, great communication from the first time I contacted them. Super shine do an amazing job, you can really tell that they care about what they do and have pride in their work. I'll be taking my car to Super shine again thats for sure",
  },
  {
    id: 5,
    name: "Bometh",
    rating: 5,
    link: "https://maps.app.goo.gl/D8qUHhUofiFHMAaz6",
    description: "Amazing work!! Feels like brand new, much recommended.",
  },
  {
    id: 6,
    name: "Senith Treudan",
    rating: 5,
    link: "https://maps.app.goo.gl/5sAQpP8E2oAHRhbH7",
    description:
      "Absolutely outstanding service. My car looks better than the day I bought it—inside and out. The attention to detail was impressive, from the spotless interior to the flawless exterior finish. The guy was professional, friendly, and clearly takes pride in his work. Highly recommend to anyone looking for top-tier car detailing.",
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 2;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col h-full text-white mx-auto w-3/4 py-16 relative">
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-[60%] -translate-y-1/2 z-10 bg-orange-600 hover:bg-orange-700 rounded-full p-2 transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl xl:text-4xl font-semibold text-center mb-14">
            TESTIMONIALS
          </h2>
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-hidden"
            >
              {testimonials.map(({ id, name, rating, description }) => (
                <div key={id} className="flex-none w-full xl:w-1/4">
                  <TestimonialCard
                    name={name}
                    rating={rating}
                    description={description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-[60%] -translate-y-1/2 z-10 bg-orange-600 hover:bg-orange-700 rounded-full p-2 transition-colors"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
      <Link
        href="https://g.page/r/CYVBhxmqSnubEAI/review"
        target="_blank"
        className="flex justify-center gap-2 items-center"
      >
        <div className="text-center">Leave us a review at</div>
        <Image
          src={"/GoogleLogo.png"}
          alt={`${name} profile`}
          width={100}
          height={80}
          className="rounded-full object-cover"
        />
      </Link>
    </div>
  );
};

export default Testimonials;
