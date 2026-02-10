"use client";

import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/header/Header";
import FooterOne from "@/components/footer/FooterOne";
import BlogCard from "@/components/blog/BlogCard";
import FeedbackCard from "@/components/blog/FeedbackCard";
import AddBlogForm from "@/components/admin/AddBlogForm";
import { BookFeedbacksAPI } from "@/data/Blog";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const { isAdmin, loading } = useAdminAuth();
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  // 🔐 Redirect if NOT admin
  useEffect(() => {
    if (!loading && !isAdmin) {
      router.replace("/admin-login");
    }
  }, [loading, isAdmin, router]);

  // Load data
  useEffect(() => {
    if (isAdmin) {
      const storedBlogs = JSON.parse(localStorage.getItem("rwmBlogs")) || [];
      setBlogs(storedBlogs);
      setFeedbacks(BookFeedbacksAPI);
    }
  }, [isAdmin]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    toast.info("Logged out");
    router.push("/");
  };

  const handleDeleteBlog = (id) => {
    const updated = blogs.filter((b) => b.id !== id);
    setBlogs(updated);
    localStorage.setItem("rwmBlogs", JSON.stringify(updated));
    toast.success("Blog deleted successfully");
  };

  const handleDeleteFeedback = (id) => {
    const updated = feedbacks.filter((f) => f.id !== id);
    setFeedbacks(updated);
    toast.success("Feedback deleted successfully");
  };

  // ⏳ Loading state
  if (loading) {
    return (
      <div className="container pt--100 text-center">
        <p>Checking admin access…</p>
      </div>
    );
  }

  // ⛔ Block render if not admin
  if (!isAdmin) return null;

  return (
    <>
      <Header />

      <main className="main-wrapper">
        <div className="container pt--60 pb--60">
          <div className="d-flex justify-content-between align-items-center mb--40">
            <h2 className="title">Admin Dashboard</h2>
            <button onClick={handleLogout} className="axil-btn btn-bg-danger">
              Logout
            </button>
          </div>

          {/* Add Blog */}
          <AddBlogForm blogs={blogs} setBlogs={setBlogs} />

          {/* Blogs */}
          <div className="section-title-wrapper mb--30">
            <h3>Manage Blogs</h3>
          </div>

          <div className="row row--30 mb--50">
            {blogs.length === 0 && <p>No blogs yet.</p>}

            {blogs.map((blog) => (
              <div className="col-lg-4 col-md-6" key={blog.id}>
                <BlogCard blog={blog} />
                <button
                  className="axil-btn btn-bg-danger mt--10 w-100"
                  onClick={() => handleDeleteBlog(blog.id)}
                >
                  Delete Blog
                </button>
              </div>
            ))}
          </div>

          {/* Feedback */}
          <div className="section-title-wrapper mb--30">
            <h3>Manage Book Feedback</h3>
          </div>

          <div className="row row--30">
            {feedbacks.map((feedback) => (
              <div className="col-lg-6" key={feedback.id}>
                <FeedbackCard feedback={feedback} isAdmin={true} />
                <button
                  className="axil-btn btn-bg-danger mt--10 w-100"
                  onClick={() => handleDeleteFeedback(feedback.id)}
                >
                  Delete Feedback
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <FooterOne />
    </>
  );
};

export default AdminDashboard;
