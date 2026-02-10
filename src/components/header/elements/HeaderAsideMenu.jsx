// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// // import BooksData from "@/data/Books";
// import { slugify } from "@/utils";

// // Define the categories you want in RWM
// const bookCategories = [
//   "Purpose",
//   "Ministry",
//   "Apologetics",
//   "Relationship",
//   "Career",
//   "Devotional",
//   "Teen",
//   "Young Adults",
//   "Children",
// ];

// const HeaderAsideMenu = () => {
//   const [asideMenuToggler, setAsideMenuToggler] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(0);

//   const toggleAsideMenu = () => setAsideMenuToggler(!asideMenuToggler);

//   // For closing menu when resizing
//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="header-nav-department">
//       <aside className="header-department">
//         {/* Toggle button */}
//         <button
//           className="header-department-text department-title"
//           onClick={toggleAsideMenu}
//         >
//           <span className="icon">
//             <i className="fal fa-bars" />
//           </span>
//           <span className="text">Categories</span>
//         </button>

//         {/* Menu */}
//         <nav
//           className={`department-nav-menu ${asideMenuToggler ? "open" : ""}`}
//         >
//           <button className="sidebar-close" onClick={toggleAsideMenu}>
//             <i className="fas fa-times" />
//           </button>
//           <ul className="nav-menu-list">
//             {bookCategories.map((category, index) => (
//               <li key={index}>
//                 <Link href={`/books/category/${slugify(category)}`}>
//                   {category}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Overlay for mobile */}
//         {asideMenuToggler && windowWidth < 1200 && (
//           <div className="closeMask" onClick={toggleAsideMenu}></div>
//         )}
//       </aside>
//     </div>
//   );
// };

// export default HeaderAsideMenu;




"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { slugify } from "@/utils";

// RWM Categories
const bookCategories = [
  "Purpose",
  "Ministry",
  "Apologetics",
  "Relationship",
  "Career",
  "Devotional",
  "Teen",
  "Young Adults",
  "Children",
];

const HeaderAsideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAsideMenu = () => setIsOpen((prev) => !prev);
  const closeAsideMenu = () => setIsOpen(false);

  // ✅ Auto-close menu on resize (desktop → mobile / vice versa)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Prevent body scroll when menu is open (mobile UX)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <div className="header-nav-department">
      <aside className="header-department">
        {/* Toggle Button */}
        <button
          type="button"
          className="header-department-text department-title"
          onClick={toggleAsideMenu}
          aria-expanded={isOpen}
        >
          <span className="icon">
            <i className="fal fa-bars" />
          </span>
          <span className="text">Categories</span>
        </button>

        {/* Category Menu */}
        <nav className={`department-nav-menu ${isOpen ? "open" : ""}`}>
          <button
            type="button"
            className="sidebar-close"
            onClick={closeAsideMenu}
          >
            <i className="fas fa-times" />
          </button>

          <ul className="nav-menu-list">
            {bookCategories.map((category) => (
              <li key={category}>
                <Link
                  href={`/books/category/${slugify(category)}`}
                  onClick={closeAsideMenu}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Overlay (mobile only via CSS) */}
        {isOpen && <div className="closeMask" onClick={closeAsideMenu} />}
      </aside>
    </div>
  );
};

export default HeaderAsideMenu;
