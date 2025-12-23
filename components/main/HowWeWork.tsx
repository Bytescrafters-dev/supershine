import React from "react";

const slideRightStyle = `
  @keyframes slideRight {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(0%); }
    100% { transform: translateX(100%); }
  }
  @keyframes slideDown {
    0% { transform: translateY(-100%); }
    50% { transform: translateY(0%); }
    100% { transform: translateY(100%); }
  }
`;

const HowWeWork = () => {
  const steps = [
    {
      title: "Discover",
      description: "We understand your goals, users, and challenges",
    },
    {
      title: "Design",
      description: "We prototype intuitive, scalable solutions",
    },
    {
      title: "Build",
      description: "Clean, maintainable code with best practices",
    },
    {
      title: "Launch & Scale",
      description: "Ongoing support beyond delivery",
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: slideRightStyle }} />
      <div className="flex flex-col h-full text-white mx-auto w-3/4 py-16">
        <h2 className="text-3xl xl:text-4xl font-semibold text-center mb-4">
          HOW WE WORK
        </h2>
        <p className="text-center text-gray-300 mb-16">
          Simple process. Serious results.
        </p>

        <div className="relative">
          {/* Timeline line - horizontal on desktop, vertical on mobile */}
          <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-600 overflow-hidden md:block hidden">
            <div className="h-full bg-linear-to-r from-orange-700 to-yellow-600 w-full animate-[slideRight_25s_ease-in-out_infinite]"></div>
          </div>
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-600 overflow-hidden md:hidden block">
            <div className="w-full bg-linear-to-r from-orange-700 to-yellow-600 h-full animate-[slideDown_25s_ease-in-out_infinite]"></div>
          </div>

          {/* Steps - horizontal on desktop, vertical on mobile */}
          <div className="flex justify-between relative z-10 md:flex-row flex-col md:space-y-0 space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center max-w-xs md:flex-col md:items-center"
              >
                {/* Step circle */}
                <div className="w-16 h-16 bg-linear-to-r from-orange-700 to-yellow-600 rounded-full flex items-center justify-center mb-4 md:mb-4 mr-4 md:mr-0 flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>

                {/* Step content */}
                <div className="md:text-center">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeWork;
