// "use client";
// import { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import Nav from "./elements/Nav";
// import HeaderBrand from "./elements/HeaderBrand";
// import HeaderActions from "./elements/HeaderActions";

// const Header = (props) => {
//   const menuOption = useSelector((state) => state.menu);
//   const headerRef = useRef(null);
//   const stickyRef = useRef(null);
//   const placeholderRef = useRef(null);

//   useEffect(() => {
//     const headerHeight = headerRef.current.clientHeight;
//     const mainMenu = stickyRef.current;
//     const mainMenuHeight = stickyRef.current.clientHeight;
//     const mainmenuPlaceholder = placeholderRef.current;

//     const handleScroll = () => {
//       if (window.scrollY > headerHeight) {
//         mainmenuPlaceholder.style.height = mainMenuHeight + "px";
//         mainMenu.classList.add("axil-sticky");
//       } else {
//         mainmenuPlaceholder.style.height = "0";
//         mainMenu.classList.remove("axil-sticky");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="header axil-header header-style-5" ref={headerRef}>
//       <div id="axil-sticky-placeholder" ref={placeholderRef} />
//       <div className="axil-mainmenu" ref={stickyRef}>
//         <div className="container">
//           <div className="header-navbar">
//             <HeaderBrand />
//             <div
//               className={`header-main-nav ${
//                 menuOption.isMobileMenuOpen ? "open" : ""
//               }`}
//             >
//               <Nav />
//             </div>
//             <HeaderActions searchBox searchIcon />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Nav from "./elements/Nav";
import HeaderBrand from "./elements/HeaderBrand";
import HeaderActions from "./elements/HeaderActions";

const Header = () => {
  const menuOption = useSelector((state) => state.menu);
  const headerRef = useRef(null);
  const stickyRef = useRef(null);
  const placeholderRef = useRef(null);

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // ✅ Detect admin login (client-only)
    const adminStatus = localStorage.getItem("isAdminLoggedIn");
    setIsAdmin(adminStatus === "true");
  }, []);

  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const mainMenu = stickyRef.current;
    const mainMenuHeight = stickyRef.current.clientHeight;
    const mainmenuPlaceholder = placeholderRef.current;

    const handleScroll = () => {
      if (window.scrollY > headerHeight) {
        mainmenuPlaceholder.style.height = mainMenuHeight + "px";
        mainMenu.classList.add("axil-sticky");
      } else {
        mainmenuPlaceholder.style.height = "0";
        mainMenu.classList.remove("axil-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header axil-header header-style-5" ref={headerRef}>
      <div id="axil-sticky-placeholder" ref={placeholderRef} />
      <div className="axil-mainmenu" ref={stickyRef}>
        <div className="container">
          <div className="header-navbar">
            <HeaderBrand />

            <div
              className={`header-main-nav ${
                menuOption.isMobileMenuOpen ? "open" : ""
              }`}
            >
              <Nav />
            </div>

            {/* ✅ Right-side actions */}
            <div className="d-flex align-items-center gap--15">
              {isAdmin && (
                <Link
                  href="/admin/dashboard"
                  className="axil-btn btn-sm btn-bg-secondary"
                >
                  Admin Panel
                </Link>
              )}

              <HeaderActions searchBox searchIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
