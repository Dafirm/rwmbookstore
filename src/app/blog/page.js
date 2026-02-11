"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import FooterOne from "@/components/footer/FooterOne";
import BlogCard from "@/components/blog/BlogCard";
import FeedbackCard from "@/components/blog/FeedbackCard";
import { ReadingInsights } from "@/data/ReadingInsights";

const BlogPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookFeedback")) || [];
    // Show most recent first
    setFeedbacks(stored.sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
  }, []);

  return (
    <>
      <Header />

      <main className="main-wrapper">
        <div className="container pt--60 pb--60">
          {/* ================= Reading Insights ================= */}
          <div className="section-title-wrapper mb--40">
            <h2 className="title">RWM Blog</h2>
            <h2 className="title">Latest Reading Insights</h2>
            <p>Faith & Growth – Explore our curated content</p>
          </div>

          <div className="row row--30">
            {ReadingInsights.length > 0 ? (
              ReadingInsights.map((blog) => (
                <div className="col-lg-4 col-md-6" key={blog.id}>
                  <BlogCard blog={blog} />
                </div>
              ))
            ) : (
              <p>No reading insights available.</p>
            )}
          </div>

          {/* ================= Divider ================= */}
          <hr className="mt--60 mb--60" />

          {/* ================= Book Feedback ================= */}
          {/* <div className="section-title-wrapper mb--30 d-flex align-items-center justify-content-between flex-wrap gap--15">
            <div>
              <h3 className="title">Book Readers Feedback</h3>
              <p>What readers are saying about books they’ve read</p>
            </div>

            <a href="/blog/feedback" className="axil-btn btn-bg-primary">
              Leave a Book Feedback
            </a>
          </div> */}

          {/* Feedback Cards */}
          {/* <div className="row row--30 mt--20">
            {feedbacks.length > 0 ? (
              feedbacks.map((feedback) => (
                <div className="col-lg-6" key={feedback.id}>
                  <FeedbackCard feedback={feedback} />
                </div>
              ))
            ) : (
              <p>No feedback yet. Be the first to share your thoughts!</p>
            )}
          </div> */}
        </div>
      </main>

      <FooterOne />
    </>
  );
};

export default BlogPage;
