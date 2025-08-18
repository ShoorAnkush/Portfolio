import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export const Navbar = ({ toggleExpand, forceExpanded }) => {
  const [clicked, setClicked] = useState(forceExpanded);
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
    setClicked(forceExpanded ? true : false);

    const section = document.getElementById(navItem.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (!forceExpanded) {
      setClicked(false);
      if (toggleExpand) toggleExpand();
    }
  };

  return (
    <div className="flex flex-col h-full items-center bg-accent2">
      {/* Toggle Icon */}
      {!forceExpanded && (
        <div className="text-2xl flex cursor-pointer md:text-3xl text-sandy bg-accent1 w-full">
          {clicked ? (
            <RxCross2 onClick={handleIconClick} />
          ) : (
            <IoMenu onClick={handleIconClick} />
          )}
        </div>
      )}

      {/* Menu */}
      <nav className="flex text-sandy py-5 flex-col">
        {forceExpanded || clicked ? (
          navItems.map((navItem, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(navItem)}
              className={`px-3 py-2 cursor-pointer ${
                isActive === navItem.id ? "text-sky font-bold" : ""
              }`}
            >
              {navItem.name}
            </button>
          ))
        ) : (
          <button
            className="p-7 sm:text-lg md:text-base cursor-pointer"
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
