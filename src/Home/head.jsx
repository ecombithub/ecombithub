
// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { IoClose, IoMenu } from "react-icons/io5";

// const Head = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

//   return (
//     <div className="ddw">
//     <header className="header">
//       <nav className="nav container">
        
//         <NavLink to="/" className="nav__logo">Navigation Bar</NavLink>
//         <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
//           <ul className="nav__list">
//             <li className="nav__item"><NavLink to="/" className="nav__link">Home</NavLink></li>
//             <li className="nav__item"><NavLink to="/news" className="nav__link">News</NavLink></li>
//             <li className="nav__item"><NavLink to="/about-us" className="nav__link">About Us</NavLink></li>
//             <li className="nav__item"><NavLink to="/favorite" className="nav__link">Favorite</NavLink></li>
//             <li className="nav__item"><NavLink to="/location" className="nav__link">Location</NavLink></li>
//             <li className="nav__item"><NavLink to="/get-started" className="nav__link nav__cta">Get Started</NavLink></li>
//           </ul>
//           <div className="nav__close" id="nav-close" onClick={toggleMenu}>
//             <IoClose />
//           </div>
//         </div>

//         <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
//           <IoMenu />
//         </div>
//       </nav>
//     </header>
//     </div>
//   );
// };

// export default Head;