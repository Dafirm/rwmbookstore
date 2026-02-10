


"use client";
import Link from "next/link";
import Image from "next/image";

const BookCard = ({ book }) => {
  return (
    <div className="axil-product product-style-one">
      <div className="product-thumb">
        <Link href={`/books/${book.slug}`}>
          <Image
            src={book.images?.front || "/books/default.jpg"}
            alt={book.title}
            width={200}
            height={300}
            className="rounded-md transition-transform duration-300 hover:scale-105"
          />
          
          
        </Link>
        
      </div>

      <div className="product-content">
        <h6 className="product-title">
          <Link href={`/books/${book.slug}`}>{book.title}</Link>
        </h6>
        <span className="product-author">{book.author}</span>
      </div>
    </div>
  );
};

export default BookCard;
