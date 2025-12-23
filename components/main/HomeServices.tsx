import Image from "next/image";
import React from "react";

const HomeServices = () => {
  const services = [
    {
      title: "Website Development",
      image: "/website-icon.svg",
      description:
        "Modern, fast, SEO-friendly websites that look stunning and convert better. From restaurant sites to enterprise platforms, we create online experiences that make your brand unforgettable.",
    },
    {
      title: "Mobile App Development",
      image: "/mobile-app.svg",
      description:
        "Crafted for iOS and Android with beautiful design, smooth performance, and features your customers will love. Your idea → turned into a polished mobile experience.",
    },
    {
      title: "Custom Software (Bespoke Solutions)",
      image: "/custom-software.svg",
      description:
        "Got a unique business process? Perfect. We build tailor-made systems designed specifically for your workflows — not the other way around.",
    },
    {
      title: "Complex Integrations",
      image: "/integration.svg",
      description:
        "We connect your tools, platforms, and databases into one smooth, automated ecosystem. No more manual work. No more messy data.",
    },
    {
      title: "Process Automations",
      image: "/process-automation.svg",
      description:
        "Save hours every week. We automate invoicing, reporting, scheduling, notifications, approvals, and all those annoying repetitive tasks holding your business back.",
    },
    {
      title: "Artificial Intelligence Solutions",
      image: "/artificial-intelligence.svg",
      description:
        "AI chatbots, prediction models, automation engines, and intelligent decision-support tools — custom-built for your business.",
    },
  ];

  return (
    <div className="flex flex-col h-full text-white mx-auto w-3/4 py-16">
      <h2 className="text-3xl xl:text-4xl font-semibold text-center mb-12">
        WHAT WE DO
      </h2>
      <div className="block xl:grid xl:grid-cols-3 xl:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border-2 border-orange-600 mb-4 shadow-lg shadow-black/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/70"
            style={{
              background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
              boxShadow: 'inset 2px 2px 5px rgba(255, 255, 255, 0.1), inset -2px -2px 5px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.3)'
            }}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">
              {service.title}
            </h3>
            <div className="flex justify-center mb-4">
              <Image
                src={service.image}
                alt={service.title}
                width={100}
                height={100}
                className="filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
