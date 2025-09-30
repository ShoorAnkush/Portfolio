import { HistoryCard } from "./HistoryCard";
import { motion } from "framer-motion";
import SparklesCore from "./ui/SparklesCore";

export const History = () => {
  const experience = [
    {
      title: "Freelance Front-End Developer",
      location: "Toronto, Canada",
      period: "Jan 2025 – Present",
      role: "Freelancer",
      bullets: [
        "Built and deployed React apps (Movie Finder, Chatbot, Pokedex) showcasing API integration & state management",
        "Designed reusable components with Hooks + Context API for seamless UX",
        "Deployed projects on Netlify with CI/CD pipelines",
      ],
      tech: ["React", "Context API", "Netlify", "CI/CD"],
    },
    {
      title: "Tata Consultancy Services",
      location: "Delhi, India",
      period: "Feb 2019 – Mar 2023",
      role: "Software Engineer",
      bullets: [
        "Developed responsive emails & web pages in Salesforce Marketing Cloud, boosting engagement by 20%",
        "Conducted QA & A/B testing, reducing bounce rates by 15%",
        "Collaborated with Agile teams to deliver scalable client solutions",
        "Recognized with Spot & Innovation Awards for delivery and process improvements",
      ],
      tech: ["SFMC", "AMPscript", "QA Testing", "Agile"],
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

  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // cards animate one after another
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1], // smoother cubic-bezier easing
      },
    },
  };

  return (
    <section className="w-full py-12 px-4 sm:px-8  bg-darkbg">
      <SparklesCore particleColor="#ffd166" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              className="text-3xl font-bold tracking-wide uppercase text-peach mb-8 relative"
              variants={itemVariants}
            >
              Experience
              <span className="block w-12 h-1 bg-sandy mt-2 rounded"></span>
            </motion.h2>

            {experience.map((exp, index) => (
              <motion.div key={index} className="mb-8" variants={itemVariants}>
                <HistoryCard {...exp} />
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              className="text-3xl font-bold tracking-wide uppercase text-peach mb-8 relative"
              variants={itemVariants}
            >
              Education
              <span className="block w-12 h-1 bg-sandy mt-2 rounded"></span>
            </motion.h2>

            {education.map((edu, index) => (
              <motion.div key={index} className="mb-8" variants={itemVariants}>
                <HistoryCard {...edu} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SparklesCore>
    </section>
  );
};
