const slideDownStyle = `
  @keyframes slideDown {
    0% { transform: translateY(-100%); }
    50% { transform: translateY(0%); }
    100% { transform: translateY(100%); }
  }
`;

export default function AboutUs() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: slideDownStyle }} />
      <main className="h-full mx-auto w-full md:w-3/4 mt-32 px-8 py-8">
        <h2 className="text-3xl xl:text-4xl font-semibold text-center mb-12 text-white">
          OUR JOURNEY AT BYTECRAFTERS
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="relative pb-24">
            {/* Timeline line - centered on desktop, left on mobile */}
            <div
              className="absolute md:left-1/2 md:transform md:-translate-x-1/2 left-10 w-0.5 bg-gray-600 overflow-hidden"
              style={{ height: "calc(100% - 120px)" }}
            >
              <div className="w-full bg-linear-to-r from-orange-700 to-yellow-600 h-full animate-[slideDown_25s_ease-in-out_infinite]"></div>
            </div>

            {/* Timeline items */}
            <div className="space-y-16">
              {/* Item 1 */}
              <div className="relative flex items-center md:flex-row flex-col">
                <div className="md:w-1/2 w-full md:pr-8 pl-16 md:pl-0">
                  <div
                    className="p-8 rounded-xl border-2 border-orange-600 shadow-lg shadow-black/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/70"
                    style={{
                      background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
                      boxShadow:
                        "inset 2px 2px 5px rgba(255, 255, 255, 0.1), inset -2px -2px 5px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      Our Foundation
                    </h3>
                    <p className="text-gray-300">
                      We started our journey with a vision to transform digital
                      experiences and create innovative solutions that make a
                      difference in people's lives.
                    </p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-linear-to-r from-orange-700 to-yellow-600 rounded-full"></div>
                <div className="md:w-1/2 hidden md:block"></div>
              </div>

              {/* Item 2 */}
              <div className="relative flex items-center md:flex-row flex-col">
                <div className="md:w-1/2 hidden md:block"></div>
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-linear-to-r from-orange-700 to-yellow-600 rounded-full"></div>
                <div className="md:w-1/2 w-full md:pl-8 pl-16">
                  <div
                    className="p-8 rounded-xl border-2 border-orange-600 shadow-lg shadow-black/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/70"
                    style={{
                      background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
                      boxShadow:
                        "inset 2px 2px 5px rgba(255, 255, 255, 0.1), inset -2px -2px 5px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      Growth & Innovation
                    </h3>
                    <p className="text-gray-300">
                      Through continuous learning and adaptation, we expanded
                      our expertise and built a team of passionate professionals
                      dedicated to excellence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex items-center md:flex-row flex-col">
                <div className="md:w-1/2 w-full md:pr-8 pl-16 md:pl-0">
                  <div
                    className="p-8 rounded-xl border-2 border-orange-600 shadow-lg shadow-black/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/70"
                    style={{
                      background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
                      boxShadow:
                        "inset 2px 2px 5px rgba(255, 255, 255, 0.1), inset -2px -2px 5px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      Future Vision
                    </h3>
                    <p className="text-gray-300">
                      Looking ahead, we continue to push boundaries and explore
                      new technologies to deliver cutting-edge solutions for our
                      clients worldwide.
                    </p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-linear-to-r from-orange-700 to-yellow-600 rounded-full"></div>
                <div className="md:w-1/2 hidden md:block"></div>
              </div>

              {/* Timeline end with arrow */}
              <div className="relative mt-16">
                {/* Arrow head positioned at timeline end */}
                <div className="absolute left-10 md:left-1/2 md:transform md:-translate-x-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-12 border-r-12 border-t-20 border-l-transparent border-r-transparent border-t-orange-600"></div>
                </div>
                {/* Text below arrow */}
                <div className="flex justify-center mt-16">
                  <p className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-100 font-bold text-4xl md:ml-0 ml-8 mt-4">
                    We are growing !!!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
