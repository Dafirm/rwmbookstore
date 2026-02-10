"use client";

import { toast } from "react-toastify";

const FeedbackCard = ({ feedback, isAdmin = false }) => {
  // Delete feedback handler (admin only)
  const handleDelete = () => {
    if (!isAdmin) return;

    const stored = JSON.parse(localStorage.getItem("bookFeedback")) || [];
    const filtered = stored.filter((item) => item.id !== feedback.id);
    localStorage.setItem("bookFeedback", JSON.stringify(filtered));
    toast.success("Feedback deleted successfully!");
    // Reload page to reflect changes
    window.location.reload();
  };

  return (
    <div className="feedback-card p--30 bg-color-white rounded--10 shadow--sm">
      <div className="feedback-content">
        <h5 className="feedback-book-title">{feedback.title}</h5>
        <p className="feedback-author">by {feedback.author}</p>
        {feedback.nickname && (
          <p className="feedback-nickname">- {feedback.nickname}</p>
        )}
        <p className="feedback-text mt--10">{feedback.feedback}</p>
      </div>

      {isAdmin && (
        <div className="mt--10 text-end">
          <button
            className="axil-btn btn-bg-danger btn-sm"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedbackCard;
