import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import profile from "../assets/images/profile.jpg";

export const About = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/ankush-shoor/" },
    { icon: FaFacebook, url: "https://www.facebook.com/ankushshoor/" },
    { icon: FaInstagram, url: "https://www.instagram.com/shoor_ankush/" },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-accent2 text-white shadow-2xl">
      {/* Profile */}

      <div className="flex-none py-4 sm:py-5 md:py-6 bg-gradient-to-b from-accent1 to-darkcard flex flex-col items-center shadow-lg">
        <img
          src={profile}
          alt="Ankush Shoor"
          className="rounded-full object-bottom object-cover mb-2 
                     size-28 lg:size-34
                     border-4 border-sandy shadow-md"
        />
        <div className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold">
          Ankush Shoor
        </div>
        <div className="text-xs sm:text-sm md:text-sm lg:text-sm text-gray-300">
          Front End Developer
        </div>
      </div>

      {/* Scrollable main content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden divide-y divide-gray-600 hide-scrollbar px-2 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4">
        {/* Contact Info */}
        <section className="py-2 space-y-1 sm:py-3 sm:space-y-2 md:py-4">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center">
            <span className="font-semibold text-peach text-sm sm:text-base md:text-sm lg:text-base">
              Email:
            </span>
            <span className="flex-1 mx-0 sm:mx-2"></span>
            <span className="font-normal text-sm sm:text-base md:text-sm lg:text-base break-all">
              ankushshoor96@gmail.com
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center">
            <span className="font-semibold text-peach text-sm sm:text-base md:text-sm lg:text-base">
              City:
            </span>
            <span className="flex-1 mx-0 sm:mx-2"></span>
            <span className="font-normal text-sm sm:text-base md:text-sm lg:text-base">
              Toronto, Canada
            </span>
          </div>
        </section>

        {/* Skills */}
        <section className="py-2 space-y-2 sm:py-4 sm:space-y-3 md:space-y-4">
          {[
            { skill: "React", level: 80 },
            { skill: "HTML", level: 90 },
            { skill: "CSS", level: 80 },
            { skill: "Javascript", level: 60 },
            { skill: "Tailwind", level: 70 },
          ].map(({ skill, level }) => (
            <div key={skill}>
              <div className="flex items-center justify-between mb-1">
                <div className="text-[11px] sm:text-sm md:text-xs lg:text-xs font-semibold">
                  {skill}
                </div>
                <div className="text-[11px] sm:text-sm md:text-xs lg:text-xs">
                  {level}%
                </div>
              </div>
              <div className="w-full h-2 sm:h-2.5 md:h-2 lg:h-3 bg-darkbg rounded-full overflow-hidden">
                <div
                  className="h-2 sm:h-2.5 md:h-2 lg:h-3 bg-sandy rounded-full shadow-sm"
                  style={{ width: `${level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </section>

        {/* Resume */}
        <section className="flex justify-center py-3 sm:py-5 md:py-6">
          <a
            href="/AnkushShoor.pdf"
            download
            className="px-4 py-1 sm:px-6 sm:py-2 md:px-5 md:py-2 bg-sandy
             text-darkbg font-semibold rounded-full shadow-md flex items-center gap-2 hover:bg-peach transition text-xs sm:text-sm md:text-sm lg:text-base"
          >
            <FaDownload className="text-sm sm:text-base md:text-sm lg:text-base" />
            Download Resume
          </a>
        </section>
      </div>

      {/* Socials */}
      <section className="flex-none h-14 sm:h-16 bg-gradient-to-b from-accent1 to-darkcard">
        <div className="flex flex-row gap-18 sm:gap-14 md:gap-14 lg:gap-14 justify-center items-center h-full">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="text-lg sm:text-xl md:text-xl lg:text-2xl hover:text-sandy hover:scale-110 transition-transform duration-200" />
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};
