

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Slider from "react-slick"; // ✅ import react-slick directly
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BooksAPI } from "@/data/Books";
import { slugify } from "@/utils";
import BookSliderCard from "../books/BookSliderCard";

const Banner = () => {
  const pathname = usePathname();

  const books = useMemo(() => {
    if (Array.isArray(BooksAPI)) return BooksAPI;
    if (Array.isArray(BooksAPI?.books)) return BooksAPI.books;
    return [];
  }, []);

  const pageCategory = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts[0] === "books" && parts[1] === "category") {
      return parts[2];
    }
    return null;
  }, [pathname]);

  const sliderBooks = useMemo(() => {
    if (!pageCategory) return books;

    return books.filter(
      (book) =>
        book?.category && slugify(book.category) === slugify(pageCategory)
    );
  }, [books, pageCategory]);

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    autoplay: true, // ✅ auto-slide enabled
    autoplaySpeed: 2500, // ✅ slide every 2.5 seconds
    speed: 1000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 2 } },
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

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
              <Slider {...settings}>
                {sliderBooks.slice(0, 12).map((book) => (
                  <BookSliderCard
                    key={book.id || book.slug}
                    book={{
                      ...book,
                      images: {
                        front: book.images?.front || "/books/default.jpg",
                      },
                    }}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;



