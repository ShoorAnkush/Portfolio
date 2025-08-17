import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export const Navbar = ({ toggleExpand }) => {
  const [clicked, setClicked] = useState(false);
  const [isActive, setIsActive] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "History", id: "history" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleIconClick = () => {
    setClicked(prev => !prev);
    if (toggleExpand) toggleExpand();
  };

  const handleMenuClick = navItem => {
    setIsActive(navItem.id);
    setClicked(false);

    const section = document.getElementById(navItem.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (toggleExpand) toggleExpand();
  };

  return (
    <div className="flex flex-col h-full items-center bg-accent2">
      {/* Toggle Icon */}
      <div className="text-2xl flex md:text-3xl text-sandy bg-accent1 w-full">
        {clicked ? (
          <RxCross2 onClick={handleIconClick} />
        ) : (
          <IoMenu onClick={handleIconClick} />
        )}
      </div>

      {/* Menu */}
      <nav className="flex text-sandy py-5 flex-col">
        {clicked ? (
          navItems.map((navItem, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(navItem)}
              className={`px-3 py-2 ${
                isActive === navItem.id ? "text-sky font-bold" : ""
              }`}
            >
              {navItem.name}
            </button>
          ))
        ) : (
          <button
            className="p-7 sm:text-lg md:text-base"
            style={{ transform: "rotate(90deg)" }}
            onClick={handleIconClick}
          >
            {navItems.find(item => item.id === isActive)?.name ||
              navItems[0].name}
          </button>
        )}
      </nav>
    </div>
  );
};
