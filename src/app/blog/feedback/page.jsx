"use client";

import BookFeedbackForm from "@/components/blog/BookFeedbackForm";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Header from "@/components/header/Header";
import FooterOne from "@/components/footer/FooterOne";

const FeedbackPage = () => {
  return (
    <>
      <Header />

      <main className="main-wrapper">
        <Breadcrumb
          activeItem="Feedback"
          title="Share Your Reading Experience"
        />

        <div className="container pt--60 pb--60">
          <BookFeedbackForm />
        </div>
      </main>

      <FooterOne />
    </>
  );
};

export default FeedbackPage;
