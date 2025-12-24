import React from "react";

const AddOns = () => {
  const services = [
    {
      title: "Pet hair removal",
      image: "/pet-hair-removal.png",
      prices: ["Only $50 (Sedan/Hatch)", "Only $70 (SUV/Larger Cars)"],
    },
    {
      title: "Engine bay clean",
      image: "/engine-bay-clean.jpg",
      prices: ["Only $50 (Sedan/Hatch)", "Only $70 (SUV/Larger Cars)"],
    },
    {
      title: "Ceramic & wax protection",
      image: "/ceramic-coating.jpg",
      prices: ["Only $180 (Sedan/Hatch)", "Only $220 (SUV/Larger Cars)"],
    },
    {
      title: "Headlight restoration",
      image: "/headlight-restoration.jpg",
      prices: ["Only $100 (Sedan/Hatch)", "Only $120 (SUV/Larger Cars)"],
    },
  ];

  return (
    <div className="flex flex-col h-full text-white mx-auto w-3/4 py-16">
      <h2 className="text-3xl xl:text-4xl font-bold text-red-900 text-center mb-12">
        Add-ons
      </h2>
      <div className="block xl:grid xl:grid-cols-4 xl:gap-6">
        {services.map(({ title, image, prices }, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border-2 border-red-900 mb-4 shadow-lg shadow-black/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/70 flex flex-col"
            style={{
              background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
              boxShadow:
                "inset 2px 2px 5px rgba(255, 255, 255, 0.1), inset -2px -2px 5px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
            <div className="mb-4">
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="mt-auto pt-4">
              {prices.map((price, index) => (
                <p
                  key={index}
                  className="text-start text-md text-transparent bg-clip-text bg-linear-to-r from-orange-700 to-orange-300 bg-white/90 font-semibold"
                >
                  {price}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOns;
