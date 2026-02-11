"use client";

import { useState, useMemo } from "react";
import Section from "@/components/elements/Section";
import { slugify } from "@/utils";

// Placeholder upcoming books
const upcomingKidsBooks = [
  { id: 1, title: "Noah's Ark Adventure", category: "Old Testament" },
  { id: 2, title: "David and Goliath", category: "Faith & Courage" },
  { id: 3, title: "Jonah and the Big Fish", category: "Obedience" },
  { id: 4, title: "The Good Samaritan", category: "Love & Kindness" },
  { id: 5, title: "Daniel in the Lion's Den", category: "Trust in God" },
  { id: 6, title: "Jesus Calms the Storm", category: "Faith" },
  { id: 7, title: "Parable of the Lost Sheep", category: "Forgiveness" },
  { id: 8, title: "The Armor of God", category: "Spiritual Growth" },
  { id: 9, title: "Moses and the Red Sea", category: "Courage & Obedience" },
  { id: 10, title: "The Birth of Jesus", category: "Nativity" },
  { id: 11, title: "The Lord's Prayer Explained", category: "Prayer" },
  { id: 12, title: "Peter Walks on Water", category: "Faith & Trust" },
];

const KidsPage = () => {
  const books = useMemo(() => upcomingKidsBooks, []);

  const [bookShow, setBookShow] = useState(6); // show fewer to start

  const categories = [...new Set(books.map((b) => b.category))];

  const [filteredBooks, setFilteredBooks] = useState(books);

  const loadMoreHandler = () => {
    setBookShow((prev) => prev + 3);
  };

  const categoryHandler = (e) => {
    const value = e.target.value;
    if (value === "all") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter((book) => slugify(book.category) === value)
      );
    }
    setBookShow(6);
  };

  const totalBooks = filteredBooks.length;
  const visibleBooks = Math.min(bookShow, totalBooks);
  const progressPercentage =
    totalBooks > 0 ? (visibleBooks / totalBooks) * 100 : 0;

  return (
    <Section pClass="axil-shop-area" style={{ backgroundColor: "#fffbe6" }}>
      {/* HEADER */}
      <div className="text-center mb--40">
        <h2 style={{ color: "#ff6f61", fontFamily: "'Comic Neue', cursive" }}>
          🎉 Upcoming Kids Books 🎉
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Something magical is on its way! Check back soon or explore categories
          below.
        </p>
      </div>

      {/* CATEGORY FILTER */}
      <div className="axil-shop-top mb--40 text-center">
        <select className="single-select" onChange={categoryHandler}>
          <option value="all">All Categories</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={slugify(cat)}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* BOOK GRID */}
      <div className="row row--15">
        {filteredBooks.length > 0 ? (
          filteredBooks.slice(0, bookShow).map((book) => (
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6" key={book.id}>
              <div
                className="kids-book-card"
                style={{
                  backgroundColor: "#ffe0f0",
                  borderRadius: "12px",
                  padding: "20px",
                  textAlign: "center",
                  boxShadow: "0px 6px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
              >
                <img
                  src={`https://source.unsplash.com/400x400/?kids,books,cartoon&sig=${book.id}`}
                  alt={book.title}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "15px",
                  }}
                />
                <h5
                  style={{
                    fontFamily: "'Comic Neue', cursive",
                    color: "#ff6f61",
                  }}
                >
                  {book.title}
                </h5>
                <p style={{ fontSize: "0.9rem", color: "#777" }}>
                  Category: {book.category}
                </p>
                <span style={{ color: "#fbbf24", fontWeight: "bold" }}>
                  Coming Soon!
                </span>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center pt--30">No upcoming books yet!</h4>
        )}
      </div>

      {/* PROGRESS + LOAD MORE */}
      {totalBooks > 0 && (
        <div className="pt--30 text-center">
          <p className="text-muted mb--10">
            {visibleBooks} of {totalBooks} upcoming books revealed
          </p>
          <div
            className="progress mb--15"
            style={{
              height: "10px",
              borderRadius: "6px",
              backgroundColor: "#ffd9e6",
            }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${progressPercentage}%`,
                background: "linear-gradient(90deg, #ffb703, #fb8500)",
                transition: "width 0.35s ease",
                borderRadius: "6px",
              }}
            />
          </div>

          <div>
            {visibleBooks < totalBooks ? (
              <button
                className="axil-btn btn-bg-lighter"
                onClick={loadMoreHandler}
                style={{
                  backgroundColor: "#ff6f61",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  marginTop: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Reveal More
              </button>
            ) : (
              <span style={{ color: "#ff6f61", fontWeight: "bold" }}>
                All upcoming books revealed!
              </span>
            )}
          </div>
        </div>
      )}
    </Section>
  );
};

export default KidsPage;
