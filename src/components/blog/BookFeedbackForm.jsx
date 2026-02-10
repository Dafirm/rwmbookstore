"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BookFeedbackForm = ({ bookSlug }) => {
  const [formData, setFormData] = useState({
    nickname: "",
    title: "",
    author: "",
    feedback: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      bookSlug,
      id: Date.now(), // unique id for deletion
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage
    const stored = JSON.parse(localStorage.getItem("bookFeedback")) || [];
    localStorage.setItem("bookFeedback", JSON.stringify([...stored, payload]));

    toast.success("Feedback submitted successfully 🙌");

    setTimeout(() => {
      router.push("/blog");
    }, 1500);
  };

  return (
    <div className="book-feedback-card">
      <h4 className="title">Share Your Book Feedback</h4>

      <form onSubmit={handleSubmit}>
        {/* Nickname */}
        <div className="form-group">
          <label>Nickname (optional)</label>
          <input
            type="text"
            name="nickname"
            placeholder="e.g. FaithReader, BookLover23"
            value={formData.nickname}
            onChange={handleChange}
          />
        </div>

        {/* Book Title */}
        <div className="form-group">
          <label>Book Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter book title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Author */}
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            placeholder="Book author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        {/* Feedback */}
        <div className="form-group">
          <label>Your Feedback</label>
          <textarea
            name="feedback"
            rows="5"
            placeholder="What did this book change for you?"
            value={formData.feedback}
            onChange={handleChange}
            required
          />
        </div>

        <button className="axil-btn btn-bg-primary">Submit Feedback</button>
      </form>
    </div>
  );
};

export default BookFeedbackForm;
