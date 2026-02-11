// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export const useAdminAuth = () => {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const adminLoggedIn = localStorage.getItem("isAdminLoggedIn");
//     if (adminLoggedIn === "true") {
//       setIsAdmin(true);
//     } else {
//       setIsAdmin(false);
//       // redirect if not admin
//       if (router.pathname.includes("/admin")) {
//         router.push("/admin/login");
//       }
//     }
//     setLoading(false);
//   }, [router]);

//   return { isAdmin, loading };
// };

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const useAdminAuth = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (adminLoggedIn === "true") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
      // redirect if not admin
      if (router.pathname.includes("/admin")) {
        router.push("/admin/login");
      }
    }
    setLoading(false);
  }, [router]);

  return { isAdmin, loading };
};
