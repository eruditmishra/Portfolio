import React, { useEffect, useState } from "react";
import HamburgerMenu from "./Hamburger";
import Nav from "./Nav";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Show hamburger menu for viewport widths less than 768px
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize); // Add event listener for window resize
    handleResize(); // Call the resize handler initially
    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on unmount
    };
  }, []);

  return <div>{isMobile ? <HamburgerMenu /> : <Nav />}</div>;
};

export default Navbar;
