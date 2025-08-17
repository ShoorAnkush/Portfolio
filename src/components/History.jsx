import { HistoryCard } from "./HistoryCard";

export const History = () => {
  const experience = [
    {
      title: "Tata Consultancy Services",
      location: "Delhi, India",
      period: "Feburary 2019 to March 2023",
      role: "Software Engineer",
      bullets: [
        "Built reusable React components and design system",
        "Improved Lighthouse performance score from 68 → 92",
        "Collaborated with design to implement responsive layouts",
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
