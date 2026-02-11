"use client";
import { useState } from "react";
import { BooksAPI } from "@/data/Books";
import BookSliderCard2 from "@/components/books/BookSliderCard2";
import Section from "@/components/elements/Section";

const BookIsotop = () => {
  const books = BooksAPI.books;

  const [filteredBooks, setFilteredBooks] = useState(books);

  return (
    <Section pClass="axil-product-area pb--0" borderBottom="pb--20">
      <div className="row row--15">
        {filteredBooks.slice(0, 8).map((book) => (
          <div
            className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30"
            key={book.id}
          >
            <BookSliderCard2 book={book} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BookIsotop;
