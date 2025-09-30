import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export const HistoryCard = props => {
  const {
    title,
    location,
    period,
    role,
    degree,
    bullets = [],
    tech = [],
  } = props;

  return (
    <motion.div
      className="relative bg-card shadow-lg rounded-xl p-6 m-4 border border-transparent hover:border-sandy/40 hover:shadow-xl hover:scale-[1.02] transition-transform max-sm:p-4 max-sm:m-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.56 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* icon + content */}
      <div className="absolute -top-4 -left-4 bg-sandy text-white rounded-full p-2 shadow-md">
        {role ? <FaBriefcase size={18} /> : <FaGraduationCap size={18} />}
      </div>

      {/* rest of your content (title, period, bullets, tech) */}
      <div className="flex justify-between items-baseline flex-wrap gap-1">
        <h3 className="text-lg md:text-xl font-semibold text-sandy">{title}</h3>
        <span className="text-xs md:text-sm font-medium text-muted">
          {period}
        </span>
      </div>

      <p className="text-xs md:text-sm text-muted mt-1">{location}</p>
      {role && (
        <p className="mt-2 text-sm md:text-base font-medium text-foreground">
          {role}
        </p>
      )}

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2 mb-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-accent2 text-white rounded"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {bullets.length > 0 && (
        <ul className="mt-2 list-disc list-inside space-y-1 text-gray-300">
          {bullets.map((bul, i) => (
            <li key={i} className="text-base text-gray-300">
              {bul}
            </li>
          ))}
        </ul>
      )}

      {degree && (
        <p className="mt-3 text-xs md:text-sm italic text-muted">{degree}</p>
      )}
    </motion.div>
  );
};
