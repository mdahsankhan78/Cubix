import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { location: "/", name: "Services" },
  { location: "/aboutus", name: "Solutions" },
  { location: "/services", name: "Work" },
  { location: "/products", name: "Company" },
  { location: "/contactus", name: "Contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = window.location.pathname;
  const [activeLink, setActiveLink] = useState(links[0]);
  const [hoverLink, setHoverLink] = useState(links[0]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const handleHoverClick = (link) => {
    setHoverLink(link);
  };
  return (
    <div className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <div className="">

            <a
              key={index}
              href='#'
              className={`capitalize ${linkStyles} ${path === link.location && ('text-primary')}`}
              onClick={() => handleLinkClick(link)}
              onMouseEnter={() => handleHoverClick(link)}
              onMouseLeave={() => handleHoverClick()}
            >
              
             {link.name}

            </a>
          </div>

        );
      }
      )}
    </div>
  );
};

export default Nav;
