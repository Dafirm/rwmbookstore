// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Header from "@/components/header/Header";
// import FooterOne from "@/components/footer/FooterOne";
// import BlogCard from "@/components/blog/BlogCard";
// import { toast } from "react-toastify";

// const AdminBlogsPage = () => {
//   const router = useRouter();
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const isAdmin = localStorage.getItem("isAdminLoggedIn");
//     if (isAdmin !== "true") {
//       router.push("/")
//       [router];

//     }

//     const storedBlogs = JSON.parse(localStorage.getItem("BlogsAPI")) || [];
//     setBlogs(storedBlogs);
//   }, []);

//   const handleDelete = (id) => {
//     const updated = blogs.filter((b) => b.id !== id);
//     setBlogs(updated);
//     localStorage.setItem("BlogsAPI", JSON.stringify(updated));
//     toast.success("Blog deleted successfully");
//   };

//   return (
//     <>
//       <Header />

//       <main className="main-wrapper">
//         <div className="container pt--60 pb--60">
//           <div className="d-flex justify-content-between align-items-center mb--40">
//             <h2 className="title">Manage Blogs</h2>

//             <button
//               className="axil-btn btn-bg-secondary"
//               onClick={() => router.push("/admin/dashboard")}
//             >
//               Back to Dashboard
//             </button>
//           </div>

//           <div className="row row--30">
//             {blogs.length > 0 ? (
//               blogs.map((blog) => (
//                 <div className="col-lg-4 col-md-6" key={blog.id}>
//                   <BlogCard blog={blog} isAdmin />

//                   <div className="d-flex gap--10 mt--10">
//                     <button
//                       className="axil-btn btn-outline-secondary btn-sm w-100"
//                       onClick={() =>
//                         router.push(`/admin/blogs/edit/${blog.id}`)
//                       }
//                     >
//                       Edit
//                     </button>

//                     <button
//                       className="axil-btn btn-bg-danger btn-sm w-100"
//                       onClick={() => handleDelete(blog.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No blogs found.</p>
//             )}
//           </div>
//         </div>
//       </main>

//       <FooterOne />
//     </>
//   );
// };

// export default AdminBlogsPage;
