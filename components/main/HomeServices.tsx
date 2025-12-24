import React from "react";

const HomeServices = () => {
  const services = [
    {
      title: "Essential Shine",
      image: "/essential-shine.jpg",
      description: "Perfect for regular cleaning & maintenance",
      services: [
        "Wheel & tyre cleaning.",
        "Exterior wash, wax, shine & detailing.",
        "Interior clean; carpets, floor, seats.",
        "Full area vacuuming.",
        "UV protectant on surfaces.",
      ],
      tag: "Your car feels refreshed inside & out",
      prices: ["Only $179 (Sedan/Hatch)", "Only $219 (SUV/Larger Cars)"],
    },
    {
      title: "Interior Deep Clean",
      image: "/interior-deep-clean.jpg",
      description: "For a fresher interior, fabric renewal & clean upholstery",
      services: [
        "Full Essential Shine package.",
        "Scrub, steam & deep clean seats & upholstery.",
        "Roof upholstery cleaning.",
      ],
      tag: "Remove stains, sweat marks, dirt & odour",
      prices: ["Only $249 (Sedan/Hatch)", "Only $289 (SUV/Larger Cars)"],
    },
    {
      title: "Premium Polish & Wax",
      image: "/polish-and-wax.jpg",
      description: "Perfect for resale prep or special occasions",
      services: [
        "Full Essential Shine package.",
        "Detailed exterior polish.",
        "Full-body premium waxing & shining.",
      ],
      tag: "Showroom-grade shine & paint correction",
      prices: ["Only $319 (Sedan/Hatch)", "Only $359 (SUV/Larger Cars)"],
    },
  ];

  return (
    <div className="flex flex-col h-full text-white mx-auto w-3/4 py-16">
      <h2 className="text-3xl xl:text-4xl font-bold text-red-900 text-center mb-12">
        GET THE BEST DETAILING
      </h2>
      <div className="block xl:grid xl:grid-cols-3 xl:gap-6">
        {services.map(
          ({ title, image, description, services, tag, prices }, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border-2 border-red-900 mb-4 shadow-lg shadow-black/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/70 flex flex-col"
              style={{
                background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
                boxShadow:
                  "inset 2px 2px 5px rgba(255, 255, 255, 0.1), inset -2px -2px 5px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center">
                {title}
              </h3>
              <div className="mb-4">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <p className="text-gray-300 text-start text-xl mb-1 josefin">
                {description}
              </p>
              <ul className="list-disc list-inside text-gray-300 text-start text-lg">
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              <p className="text-gray-300 text-start text-xl font-semibold mt-4 kaushan">
                {tag}
              </p>
              <div className="mt-auto pt-4">
                {prices.map((price, index) => (
                  <p
                    key={index}
                    className="text-start text-lg text-transparent bg-clip-text bg-linear-to-r from-orange-700 to-orange-300 bg-white/90 font-semibold"
                  >
                    {price}
                  </p>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HomeServices;
