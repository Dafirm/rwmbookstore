// "use client";

// import { useState, useMemo, useEffect } from "react";
// import Section from "@/components/elements/Section";
// import { BooksAPI } from "@/data/Books";
// import { slugify } from "@/utils";
// import BookSliderCard2 from "@/components/books/BookSliderCard2";
// import { useSearchParams } from "next/navigation";

// const StoreShelf = () => {
//   const books = useMemo(() => {
//     if (Array.isArray(BooksAPI)) return BooksAPI;
//     if (Array.isArray(BooksAPI?.books)) return BooksAPI.books;
//     return [];
//   }, []);

//   const [filteredBooks, setFilteredBooks] = useState(books);
//   const [bookShow, setBookShow] = useState(12);
//   const searchParams = useSearchParams();
//   const categoryParam = searchParams.get("category");

//   const loadMoreHandler = () => {
//     setBookShow((prev) => prev + 4);
//   };

//   useEffect(() => {
//     if (!categoryParam) {
//       setFilteredBooks(books);
//     } else {
//       setFilteredBooks(
//         books.filter(
//           (book) => slugify(book.category) === slugify(categoryParam),
//         ),
//       );
//     }
//   }, [categoryParam, books]);

//   const categoryHandler = (e) => {
//     const value = e.target.value;

//     if (value === "all") {
//       setFilteredBooks(books);
//     } else {
//       setFilteredBooks(
//         books.filter((book) => slugify(book.category) === value),
//       );
//     }
//   };

//   const sortHandler = (e) => {
//     const value = e.target.value;
//     let sorted = [...filteredBooks];

//     if (value === "title") {
//       sorted.sort((a, b) => a.title.localeCompare(b.title));
//     }

//     if (value === "latest") {
//       sorted.reverse();
//     }

//     setFilteredBooks(sorted);
//   };

//   return (
//     <Section pClass="axil-shop-area">
//       {/* TOP FILTERS */}
//       <div className="axil-shop-top mb--40">
//         <div className="row">
//           <div className="col-lg-9">
//             <select className="single-select" onChange={categoryHandler}>
//               <option value="all">All Categories</option>
//               {[...new Set(books.map((b) => b.category))].map((cat, idx) => (
//                 <option key={idx} value={slugify(cat)}>
//                   {cat}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="col-lg-3">
//             <select className="single-select" onChange={sortHandler}>
//               <option value="latest">Sort by Latest</option>
//               <option value="title">Sort by Title</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* BOOK GRID */}
//       <div className="row row--15">
//         {filteredBooks.length > 0 ? (
//           filteredBooks.slice(0, bookShow).map((book) => (
//             <div
//               className="col-xl-3 col-lg-4 col-md-4 col-sm-6"
//               key={book.id || book.slug}
//             >
//               <BookSliderCard2
//                 book={{
//                   ...book,
//                   images: {
//                     front: book.images?.front || "/books/default.jpg",
//                   },
//                 }}
//               />
//             </div>
//           ))
//         ) : (
//           <h4 className="text-center pt--30">No Books Found</h4>
//         )}
//       </div>

//       {/* LOAD MORE */}
//       <div className="text-center pt--30">
//         <button
//           className={`axil-btn btn-bg-lighter btn-load-more ${
//             filteredBooks.length <= bookShow ? "disabled" : ""
//           }`}
//           onClick={loadMoreHandler}
//         >
//           {filteredBooks.length <= bookShow ? "No More Books" : "Load More"}
//         </button>
//       </div>
//     </Section>
//   );
// };

// export default StoreShelf;

"use client";

import { useState, useMemo, useEffect } from "react";
import Section from "@/components/elements/Section";
import { BooksAPI } from "@/data/Books";
import { slugify } from "@/utils";
import BookSliderCard2 from "@/components/books/BookSliderCard2";
import { useSearchParams } from "next/navigation";

const StoreShelf = () => {
  const books = useMemo(() => {
    if (Array.isArray(BooksAPI)) return BooksAPI;
    if (Array.isArray(BooksAPI?.books)) return BooksAPI.books;
    return [];
  }, []);

  const [filteredBooks, setFilteredBooks] = useState(books);
  const [bookShow, setBookShow] = useState(12);

  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    if (!categoryParam) {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter(
          (book) => slugify(book.category) === slugify(categoryParam)
        )
      );
    }
    setBookShow(12);
  }, [categoryParam, books]);

  const loadMoreHandler = () => {
    setBookShow((prev) => prev + 4);
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
    setBookShow(12);
  };

  const sortHandler = (e) => {
    const value = e.target.value;
    const sorted = [...filteredBooks];
    if (value === "title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (value === "latest") {
      sorted.reverse();
    }
    setFilteredBooks(sorted);
  };

  const totalBooks = filteredBooks.length;
  const visibleBooks = Math.min(bookShow, totalBooks);

  const progressPercentage =
    totalBooks > 0 ? (visibleBooks / totalBooks) * 100 : 0;

  return (
    <Section pClass="axil-shop-area">
      {/* TOP FILTERS */}
      <div className="axil-shop-top mb--40">
        <div className="row">
          <div className="col-lg-9">
            <select className="single-select" onChange={categoryHandler}>
              <option value="all">All Categories</option>
              {[...new Set(books.map((b) => b.category))].map((cat, idx) => (
                <option key={idx} value={slugify(cat)}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="col-lg-3">
            <select className="single-select" onChange={sortHandler}>
              <option value="latest">Sort by Latest</option>
              <option value="title">Sort by Title</option>
            </select>
          </div>
        </div>
      </div>

      {/* BOOK GRID */}
      <div className="row row--15">
        {filteredBooks.length > 0 ? (
          filteredBooks.slice(0, bookShow).map((book) => (
            <div
              className="col-xl-3 col-lg-4 col-md-4 col-sm-6"
              key={book.id || book.slug}
            >
              <BookSliderCard2
                book={{
                  ...book,
                  images: {
                    front: book.images?.front || "/books/default.jpg",
                  },
                }}
              />
            </div>
          ))
        ) : (
          <h4 className="text-center pt--30">No Books Found</h4>
        )}
      </div>

      {/* PROGRESS + LOAD MORE */}
      {totalBooks > 0 && (
        <div className="pt--30">
          {/* Progress text */}
          <p className="text-center mb--10 text-muted">
            {visibleBooks} of {totalBooks} books loaded
          </p>

          {/* Progress bar */}
          <div
            className="progress mb--15"
            style={{
              height: "8px",
              borderRadius: "4px",
              backgroundColor: "#e5e5e5",
            }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${progressPercentage}%`,
                background: "linear-gradient(90deg, #ffb703, #fb8500)",
                transition: "width 0.35s ease",
              }}
            />
          </div>

          {/* Button / Done state */}
          <div className="text-center">
            {visibleBooks < totalBooks ? (
              <button
                className="axil-btn btn-bg-lighter"
                onClick={loadMoreHandler}
              >
                Load More
              </button>
            ) : (
              <span className="text-muted">All books loaded</span>
            )}
          </div>
        </div>
      )}
    </Section>
  );
};

export default StoreShelf;