"use client";

import Image from "next/image";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Header from "@/components/header/Header";
import FooterOne from "@/components/footer/FooterOne";
import { BooksAPI } from "@/data/Books";

const BookDetails = ({ params }) => {
  const books = Array.isArray(BooksAPI)
    ? BooksAPI
    : Array.isArray(BooksAPI?.books)
      ? BooksAPI.books
      : [];

  const book = books.find((b) => b.slug === params.slug);

  if (!book) {
    return (
      <>
        <Header />
        <Breadcrumb activeItem="Book" title="Book Not Found" />
        <main className="main-wrapper">
          <h2 className="text-center pt--60">Book not found</h2>
        </main>
        <FooterOne />
      </>
    );
  }

  return (
    <>
      <Header />
      <Breadcrumb activeItem="Book Details" title={book.title} />

      <main className="main-wrapper">
        <div className="container pt--60 pb--60">
          <div className="row book-details-row">
            <div className="col-lg-6 d-flex gap-4 flex-wrap justify-content-center justify-content-lg-start">
              {/* Front Cover */}
              <div className="axil-product product-style-five rwm-book-card">
                <div className="rwm-book-image-wrapper">
                  <Image
                    src={book.images.front}
                    alt={`${book.title} front cover`}
                    width={200}
                    height={300}
                    className="rwm-book-image"
                  />
                </div>
              </div>

              {/* Back Cover */}
              {book.images.back && (
                <div className="axil-product product-style-five rwm-book-card">
                  <div className="rwm-book-image-wrapper">
                    <Image
                      src={book.images.back}
                      alt={`${book.title} back cover`}
                      width={200}
                      height={300}
                      className="rwm-book-image"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Book Info */}
            <div className="col-lg-6 book-info">
              <h2 className="book-title">{book.title}</h2>
              <p className="book-author">by {book.author}</p>
              {book.category && (
                <p className="book-category">Category: {book.category}</p>
              )}
              {book.about && (
                <div className="book-about">
                  <h4>About This Book</h4>
                  <p>{book.about}</p>
                </div>
              )}

              {/* Buy / Rent buttons based on availability */}
              <div className="book-action-buttons">
                {book.availability.buyable && (
                  <a
                    href="https://forms.gle/SRgTRrm8hkhjECR16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="axil-btn btn-bg-primary"
                  >
                    Buy Book
                  </a>
                )}
                {book.availability.rentable && (
                  <a
                    href="https://forms.gle/ggG8DTvhngVLNT8G6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="axil-btn btn-bg-secondary"
                  >
                    Rent Book
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterOne />
    </>
  );
};

export default BookDetails;
