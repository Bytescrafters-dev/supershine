"use client";

const stats = [
  {
    number: 0,
    key: "QUALITY GUARANTEED",
  },
  {
    number: 2,
    key: "BEST CHEMICLES",
  },
  {
    number: 3,
    key: "FULLY INSURED",
  },
  {
    number: 5,
    key: "HIGHLY AFFORDABLE",
  },
];

const Stats = () => {
  return (
    <section className="pt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map(({ number, key }) => {
            return (
              <div
                key={key}
                className="flex-1 flex flex-col gap-2 text-3xl items-center justify-center font-bold cursor-pointer"
              >
                <div className={`leading-snug text-white/80`}>
                  {key.split(" ")[0]}
                </div>
                <div className={`leading-snug text-white/80`}>
                  {key.split(" ")[1]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
