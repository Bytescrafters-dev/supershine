import React from "react";

const Intro = () => {
  return (
    <div className="pt-20 h-full text-white mx-auto w-3/4">
      <div className="w-full">
        <div className="text-3xl xl:text-4xl font-semibold text-center mb-12">
          WHO ARE WE
        </div>
        <div className="mt-4 flex flex-col md:flex-row gap-8">
          <div className="flex-1 text-justify">
            At Bytecrafters, we believe that great software should feel
            effortless — not just for the people who use it, but for the teams
            who manage it and the leaders who rely on it. Technology shouldn't
            be overwhelming, complicated, or cold. When done right, it becomes a
            silent engine that powers your business, simplifies your processes,
            and elevates your brand. That's the philosophy we bring to every
            project we build. We're a modern software studio based in Melbourne,
            combining creativity, engineering excellence, and a premium delivery
            experience. Our team specialises in turning ideas into beautifully
            crafted digital products — websites, mobile apps, bespoke systems,
            automations, integrations, and AI-driven solutions. Whether you're a
            small business ready to scale or an established organisation aiming
            to modernise, we help you move with confidence in a fast-changing
            digital world. What makes us different is the way we work. We blend
            the precision of a high-end development team with the warmth and
            approachability of a close partner.
          </div>
          <div className="flex-1 text-justify">
            You'll never be lost in technical jargon or left guessing about
            progress. Instead, we guide you through every stage with clarity,
            transparency, and genuine care. Our goal isn't just to deliver
            software — it's to give you an experience that feels smooth,
            personal, and tailored to your vision. Every project we take on is
            crafted with attention to detail. We obsess over clean design,
            reliable architecture, and polished user experience. We automate
            what slows you down, integrate what needs to work together, and
            build custom solutions that fit your business like a glove. And once
            your product is live, we stay with you, offering ongoing support so
            you always feel confident and supported. At Bytecrafters, we don't
            just build software. We build long-term partnerships, meaningful
            digital experiences, and solutions that help your business stand
            out.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
