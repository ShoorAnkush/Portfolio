import { HistoryCard } from "./HistoryCard";

export const History = () => {
  const experience = [
    {
      title: "Tata Consultancy Services",
      location: "Delhi, India",
      period: "Feburary 2019 to March 2023",
      role: "Software Engineer",
      bullets: [
        "Built responsive web applications using React, HTML, CSS, and Tailwind; developed reusable components and implemented state management for seamless UX",
        "Developed an e-commerce platform for healthcare professionals to order medicines, integrating APIs and ensuring a responsive, user-friendly design across devices",
        "Conducted code reviews, implemented accessibility and performance best practices, and collaborated with designers and backend teams to deliver scalable, maintainable front-end solutions",
        "Converted static HTML websites to React and successfully migrated them to AWS cloud, improving scalability, maintainability, and performance.",
      ],
    },
  ];

  const education = [
    {
      title: "Lambton College",
      location: "Toronto, ON",
      period: "May 2023 – Dec 2024",
      degree: "Full Stack Software Development",
    },
    {
      title: "DAV College",
      location: "Punjab, India",
      period: "2015 – 2018",
      degree: "Bachelors of Computer Applications",
    },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-4">
        {/* Experience */}
        <div>
          <h2 className="text-sm md:text-2xl font-bold tracking-wide uppercase text-peach mb-2">
            Experience
          </h2>
          {experience.map((exp, index) => (
            <HistoryCard key={index} {...exp} />
          ))}
        </div>

        {/* Education */}
        <div>
          <h2 className="text-sm md:text-2xl font-bold tracking-wide uppercase text-peach mb-2">
            Education
          </h2>
          {education.map((edu, index) => (
            <HistoryCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};
