import TestimonialCard from "../sub/TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    profileImage: "/testimonial1.png",
    rating: 5,
    description:
      "Working with MMG was a game-changer for our project. Their team brought exceptional technical knowledge, professionalism, and strategic insight from day one. They not only helped us meet compliance standards but also introduced sustainable, long-term solutions that exceeded expectations. Their multidisciplinary approach ensured smooth coordination across all aspects of the work. We highly recommend MMG to any organization seeking reliable, forward-thinking environmental consultancy services",
  },
  {
    id: 2,
    name: "Jane Washington",
    profileImage: "/testimonial2.png",
    rating: 4,
    description:
      "MMG delivered outstanding results on our environmental compliance and infrastructure upgrade project. Their deep expertise, especially in waste management and pollution control, was evident throughout. The team was responsive, detail-oriented, and committed to delivering practical solutions tailored to our operational needs. Their ability to bridge technical excellence with real-world application made a significant impact. We look forward to collaborating with MMG on future sustainability initiatives",
  },
  {
    id: 3,
    name: "Jack Capstone",
    profileImage: "/testimonial3.png",
    rating: 5,
    description:
      "Partnering with MMG brought immense value to our development initiative. Their holistic understanding of environmental systems, engineering solutions, and financial oversight ensured our project stayed aligned with both regulatory requirements and long-term sustainability goals. The team’s professionalism, clarity in communication, and ability to navigate complex challenges were truly impressive. MMG stands out as a consultancy that delivers both technical depth and strategic direction with measurable impact",
  },
  {
    id: 4,
    name: "Jack Capstone",
    profileImage: "/testimonial3.png",
    rating: 5,
    description:
      "Partnering with MMG brought immense value to our development initiative. Their holistic understanding of environmental systems, engineering solutions, and financial oversight ensured our project stayed aligned with both regulatory requirements and long-term sustainability goals. The team’s professionalism, clarity in communication, and ability to navigate complex challenges were truly impressive. MMG stands out as a consultancy that delivers both technical depth and strategic direction with measurable impact",
  },
];

const Testimonials = () => (
  <div className="flex flex-col h-full text-white mx-auto w-3/4 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl xl:text-4xl font-semibold text-center mb-14">
        TESTIMONIALS
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {testimonials.map(({ id, profileImage, name, rating, description }) => (
          <TestimonialCard
            key={id}
            profileImage={profileImage}
            name={name}
            rating={rating}
            description={description}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;
