"use client";

import { FaStar } from "react-icons/fa";

type TestimonialProps = {
  name: string;
  rating: number;
  description: string;
};

const TestimonialCard = ({ name, rating, description }: TestimonialProps) => {
  const maxStars = 5;
  const colors = ["#EF6C02", "#445A64", "#5C6BC0", "#004D40", "#02579B"];
  const charCode = name?.charCodeAt(0) || 65;
  const backgroundColor = colors[charCode % colors.length];

  const getTruncatedText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div
      className="p-6 rounded-xl border-2 border-orange-600 mb-4 shadow-lg shadow-black/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 text-center h-80 flex flex-col"
      style={{
        background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
        boxShadow:
          "inset 2px 2px 5px rgba(255, 255, 255, 0.1), inset -2px -2px 5px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.3)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "inset 2px 2px 5px rgba(255, 255, 255, 0.1), inset -2px -2px 5px rgba(0, 0, 0, 0.5), 0 0 30px rgba(249, 115, 22, 0.6), 0 8px 16px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "inset 2px 2px 5px rgba(255, 255, 255, 0.1), inset -2px -2px 5px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.3)";
      }}
    >
      <div
        className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-4xl font-bold"
        style={{ backgroundColor }}
      >
        {name?.charAt(0).toUpperCase()}
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="flex justify-center mb-3 text-yellow-500">
        {[...Array(maxStars)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? "fill-yellow-500" : "fill-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-100 text-sm grow">
        {getTruncatedText(description, 20)}
      </p>
    </div>
  );
};

export default TestimonialCard;
