// "use client";
// import { useState, useMemo } from "react";
// import Link from "next/link";
// import { BooksAPI } from "@/data/Books";

// const BookSearchModal = ({ open, onClose }) => {
//   const [query, setQuery] = useState("");

//   // ✅ Normalize books source (VERY IMPORTANT)
//   const books = useMemo(() => {
//     if (Array.isArray(BooksAPI)) return BooksAPI;
//     if (Array.isArray(BooksAPI?.books)) return BooksAPI.books;
//     return [];
//   }, []);

//   // ✅ Search logic
//   const results = useMemo(() => {
//     if (!query.trim()) return [];

//     const q = query.toLowerCase();

//     return books.filter((book) => {
//       const title = book?.title?.toLowerCase() || "";
//       const author = book?.author?.toLowerCase() || "";

//       return title.includes(q) || author.includes(q);
//     });
//   }, [query, books]);

//   return (
//     <>
//       <div className={`header-search-modal ${open ? "open" : ""}`}>
//         <button className="sidebar-close" onClick={onClose}>
//           <i className="fas fa-times" />
//         </button>

//         <div className="search-input-wrap">
//           <input
//             type="search"
//             placeholder="Search by title or author..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="form-control"
//           />
//         </div>

//         <ul className="search-results">
//           {results.length > 0
//             ? results.map((book) => (
//                 <li key={book.id || book.slug}>
//                   <Link href={`/books/${book.slug}`} onClick={onClose}>
//                     <strong>{book.title}</strong>
//                     {book.author && ` — ${book.author}`}
//                   </Link>
//                 </li>
//               ))
//             : query && <li className="no-results">No results found</li>}
//         </ul>
//       </div>

//       {open && <div className="closeMask" onClick={onClose} />}
//     </>
//   );
// };

// export default BookSearchModal;

"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BooksAPI } from "@/data/Books";

const BookSearchModal = ({ open, onClose }) => {
  const [query, setQuery] = useState("");

  // ✅ KEEP: normalize books source
  const books = useMemo(() => {
    if (Array.isArray(BooksAPI)) return BooksAPI;
    if (Array.isArray(BooksAPI?.books)) return BooksAPI.books;
    return [];
  }, []);

  // ✅ KEEP: search logic
  const results = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();

    return books.filter((book) => {
      const title = book?.title?.toLowerCase() || "";
      const author = book?.author?.toLowerCase() || "";
      return title.includes(q) || author.includes(q);
    });
  }, [query, books]);

  return (
    <>
      <div className={`header-search-modal ${open ? "open" : ""}`}>
        <button className="card-close sidebar-close" onClick={onClose}>
          <i className="fas fa-times" />
        </button>

        <div className="header-search-wrap">
          {/* 🔍 Search input (ProductSearchModal style) */}
          <div className="card-header">
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder="Search books by title or author..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="axil-btn btn-bg-primary" type="button">
                <i className="far fa-search" />
              </button>
            </div>
          </div>

          {/* 📚 Results */}
          <div className="card-body">
            <div className="search-result-header">
              <h6 className="title">
                {results.length} Result{results.length !== 1 && "s"} Found
              </h6>
              <Link href="/books" onClick={onClose}>
                View All
              </Link>
            </div>

            <div className="search-results">
              {results.length > 0
                ? results.map((book) => (
                    <div
                      className="axil-product-list"
                      key={book.id || book.slug}
                    >
                      {/* Thumbnail */}
                      <div onClick={onClose}>
                        <Link href={`/books/${book.slug}`}>
                          <Image
                            src={
                              book?.images?.front ||
                              "/images/placeholder-book.jpg"
                            }
                            alt={book.title}
                            width={120}
                            height={160}
                          />
                        </Link>
                      </div>

                      {/* Content */}
                      <div className="product-content">
                        {book.author && (
                          <span className="product-author">{book.author}</span>
                        )}

                        <div onClick={onClose}>
                          <h6 className="product-title">
                            <Link href={`/books/${book.slug}`}>
                              {book.title}
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))
                : query && <p className="text-center mt-4">No results found</p>}
            </div>
          </div>
        </div>
      </div>

      {open && <div className="closeMask" onClick={onClose} />}
    </>
  );
};

export default BookSearchModal;
