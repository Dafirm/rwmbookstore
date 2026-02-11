"use client";

import { useAdminAuth } from "@/hooks/useAdminAuth";
import FeedbackCard from "@/components/blog/FeedbackCard";
import Header from "@/components/header/Header";
import FooterOne from "@/components/footer/FooterOne";

const AdminFeedbackPage = () => {
  const { isAdmin, loading } = useAdminAuth();

  if (loading) return null;
  if (!isAdmin) return null;

  const feedbacks = JSON.parse(localStorage.getItem("bookFeedback")) || [];

  return (
    <>
      <Header />

      <main className="main-wrapper">
        <div className="container pt--60 pb--60">
          <h2 className="title mb--40">Manage Book Feedback</h2>

          <div className="row row--30">
            {feedbacks.map((feedback) => (
              <div className="col-lg-6" key={feedback.id}>
                <FeedbackCard feedback={feedback} isAdmin />
              </div>
            ))}
          </div>
        </div>
      </main>

      <FooterOne />
    </>
  );
};

export default AdminFeedbackPage;
