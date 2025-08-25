// import React, { useState } from "react";
// import "./Navbar.css";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       {/* Nav Links */}
//       <div className={`nav-links ${isOpen ? "open" : ""}`}>
//         <ul>
//           <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
//           <li><a href="#about" onClick={handleLinkClick}>About</a></li>
//           <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
//           <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
//           <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
//           <li><a href="#resume" onClick={handleLinkClick}>Resume</a></li>
//           <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
//         </ul>
//       </div>

//       {/* Hamburger for mobile */}
//       <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Nav Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#resume" onClick={handleLinkClick}>Resume</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </div>

      {/* Hamburger / Close button */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
