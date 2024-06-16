// import { NavLink } from "react-router-dom";
// import styles from "./PageNav.module.css";
// import Logo from "./Logo";
// function PageNav() {
//   return (
//     <nav className={styles.nav}>
//       <Logo />
//       <ul>
//         <li>
//           <NavLink to="/media">Media</NavLink>
//         </li>
//         <li>
//           <NavLink to="/about">About</NavLink>
//         </li>
//         <li>
//           <NavLink to="/login">Login</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default PageNav;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <Logo />
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </button>
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
        <li>
          <NavLink to="/media" onClick={() => setIsOpen(false)}>
            Media
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={() => setIsOpen(false)}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
