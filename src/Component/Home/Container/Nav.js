import React, { useEffect, useState } from "react";
import "../Style/Nav.css";

const Nav = () => {
  const [show, setHandleshow] = useState(false);


  // Navbar animation Animation Function
  const animatedNavbar = () => {
    if (window.scrollY > 100) {
      setHandleshow(true);
    } else {
      setHandleshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animatedNavbar);
    return () => window.removeEventListener("scroll", animatedNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix"
      />
      <img
        className="nav-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </div>
  );
};

export default Nav;
