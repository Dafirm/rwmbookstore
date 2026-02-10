
// "use client";
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { mobileMenu } from "@/store/slices/menuSlice";
// import { HeaderMenu } from "@/data/Menu";



// const Nav = () => {
//   const dispatch = useDispatch();
//   const menuOption = useSelector((state) => state.menu);

//   return (
//     <>
//       <nav className="mainmenu-nav">
//         <button
//           className="mobile-close-btn mobile-nav-toggler"
//           onClick={() => dispatch(mobileMenu(false))}
//         >
//           <i className="fas fa-times" />
//         </button>

//         <ul className="mainmenu">
//           {HeaderMenu.map((item, idx) => (
//             <li key={idx}>
//               <Link href={item.url}>{item.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {menuOption.isMobileMenuOpen && (
//         <div
//           className="closeMask"
//           onClick={() => dispatch(mobileMenu(false))}
//         ></div>
//       )}
//     </>
//   );
// };

// export default Nav;

"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { mobileMenu } from "@/store/slices/menuSlice";
import { HeaderMenu } from "@/data/Menu";

const Nav = () => {
  const dispatch = useDispatch();
  const menuOption = useSelector((state) => state.menu);

  // Detect if admin is logged in
  const isAdminLoggedIn =
    typeof window !== "undefined" &&
    localStorage.getItem("isAdminLoggedIn") === "true";

  return (
    <>
      <nav className="mainmenu-nav">
        <button
          className="mobile-close-btn mobile-nav-toggler"
          onClick={() => dispatch(mobileMenu(false))}
        >
          <i className="fas fa-times" />
        </button>

        <ul className="mainmenu">
          {HeaderMenu.map((item, idx) => {
            // Skip admin link if logged in
            if (item.isAdminLink && isAdminLoggedIn) return null;

            return (
              <li key={idx}>
                <Link href={item.url}>{item.name}</Link>
              </li>
            );
          })}

          {/* Dynamic Admin / Dashboard button */}
          {!isAdminLoggedIn ? (
            <li>
              <Link href="/admin/login">Admin Login</Link>
            </li>
          ) : (
            <li>
              <Link href="/admin/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </nav>

      {menuOption.isMobileMenuOpen && (
        <div
          className="closeMask"
          onClick={() => dispatch(mobileMenu(false))}
        ></div>
      )}
    </>
  );
};

export default Nav;
