import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import profilepic from "../assets/images/profilepic.jpg";

export const About = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/ankush-shoor/" },
    { icon: FaFacebook, url: "https://www.facebook.com/ankushshoor/" },
    { icon: FaInstagram, url: "https://www.instagram.com/shoor_ankush/" },
  ];

  return (
    <div className="flex flex-col h-full shadow-2xl w-full bg-accent2 text-white">
      {/* Profile */}
      <div className="flex-none py-6 bg-gradient-to-b from-accent1 to-darkcard flex flex-col items-center shadow-lg">
        <img
          src={profilepic}
          alt="Ankush Shoor"
          className="rounded-full object-cover mb-3 size-28 border-4 border-sandy shadow-md max-sm:w-20 max-sm:h-20"
        />
        <div className="text-2xl md:text-3xl max-sm:text-xl font-bold">
          Ankush Shoor
        </div>
        <div className="text-sm md:text-base max-sm:text-xs text-gray-300">
          Front End Developer
        </div>
      </div>

      {/* Scrollable main content */}
      <div className="flex-1 overflow-y-auto divide-y divide-gray-600 hide-scrollbar px-4 py-3 max-sm:px-2 max-sm:py-2">
        {/* Contact Info */}
        <section className="py-3 space-y-2 max-sm:py-2 max-sm:space-y-1">
          <div className="flex items-center max-sm:flex-col max-sm:items-start">
            <span className="font-semibold text-peach max-sm:text-sm">
              Email:
            </span>
            <span className="flex-1 mx-2 "></span>
            <span className="font-normal max-sm:text-sm">
              a_shoor@outlook.com
            </span>
          </div>
          <div className="flex items-center max-sm:flex-col max-sm:items-start">
            <span className="font-semibold text-peach max-sm:text-sm">
              City:
            </span>
            <span className="flex-1 mx-2 "></span>
            <span className="font-normal max-sm:text-sm">Toronto, Canada</span>
          </div>
        </section>

        {/* Skills */}
        <section className="py-4 space-y-4 max-sm:py-2 max-sm:space-y-2">
          {[
            { skill: "React", level: 80 },
            { skill: "HTML", level: 90 },
            { skill: "CSS", level: 80 },
            { skill: "Javascript", level: 60 },
            { skill: "Tailwind", level: 70 },
          ].map(({ skill, level }) => (
            <div key={skill}>
              <div className="flex items-center justify-between mb-1">
                <div className="text-sm md:text-xs max-sm:text-[10px] font-semibold">
                  {skill}
                </div>
                <div className="text-sm md:text-xs max-sm:text-[10px]">
                  {level}%
                </div>
              </div>
              <div className="w-full h-3 bg-darkbg rounded-full overflow-hidden max-sm:h-2">
                <div
                  className="h-3 bg-sandy rounded-full shadow-sm max-sm:h-2"
                  style={{ width: `${level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </section>

        {/* Resume */}
        <section className="flex justify-center py-6 max-sm:py-4">
          <a
            href=""
            className="px-6 py-2 bg-sandy text-darkbg font-semibold rounded-full shadow-md flex items-center gap-2 hover:bg-peach transition text-sm max-sm:px-4 max-sm:py-1"
          >
            <FaDownload className="max-sm:text-sm" />
            Download Resume
          </a>
        </section>
      </div>

      {/* Socials */}
      <section className="flex-none h-16 bg-gradient-to-b from-accent1 to-darkcard">
        <div className="flex flex-row gap-12 justify-center items-center h-full max-sm:gap-6">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="text-2xl hover:text-sandy hover:scale-110 transition-transform duration-200 max-sm:text-xl" />
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};
