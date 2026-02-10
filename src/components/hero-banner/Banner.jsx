

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import SlickSlider from "../elements/SlickSlider";
import { BooksAPI } from "@/data/Books";
import { slugify } from "@/utils";
import BookSliderCard from "../books/BookSliderCard";

const Banner = () => {
  const pathname = usePathname();

  // ✅ Normalize Books source
  const books = useMemo(() => {
    if (Array.isArray(BooksAPI)) return BooksAPI;
    if (Array.isArray(BooksAPI?.books)) return BooksAPI.books;
    return [];
  }, []);

  // ✅ Extract category slug safely
  const pageCategory = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts[0] === "books" && parts[1] === "category") {
      return parts[2];
    }
    return null;
  }, [pathname]);

  // ✅ Filter books for slider
  const sliderBooks = useMemo(() => {
    if (!pageCategory) return books;

    return books.filter(
      (book) =>
        book?.category && slugify(book.category) === slugify(pageCategory)
    );
  }, [books, pageCategory]);

  return (
    <div className="axil-main-slider-area main-slider-style-3">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-xl-6 col-lg-6">
            <div className="main-slider-content">
              <span className="subtitle">
                <i className="fas fa-book-reader" />
                Read • Grow • Reflect
              </span>

              <h1 className="title">
                Discover Christian Books for Every Season of Life
              </h1>

              <div className="shop-btn">
                <Link
                  href="/books"
                  className="axil-btn btn-bg-white right-icon"
                >
                  Explore <i className="fal fa-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="col-xl-6 col-lg-6">
            <div className="main-slider-large-thumb">
              <SlickSlider
                class="axil-slick-dots"
                dots
                arrows={false}
                slidesToShow={3}
                centerMode
                infinite
                centerPadding="0"
                responsive={[
                  {
                    breakpoint: 575,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    },
                  },
                ]}
              >
                {sliderBooks.slice(0, 6).map((book) => (
                  <BookSliderCard
                    key={book.id || book.slug}
                    book={{
                      ...book,
                      images: {
                        front: book.images?.front || "/books/default.jpg", // ✅ fallback
                      },
                      
                    }}
                    
                  />
                 
                ))}
              </SlickSlider>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
