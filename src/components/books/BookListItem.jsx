"use client";
import Image from "next/image";
import Link from "next/link";

const BookListItem = ({ product }) => {
  const book = product;
  if (!book || !book.slug) return null; 

  const frontImage = book?.images?.front || "/images/placeholder-book.jpg";

  return (
    <div className="axil-product-list product-list-style-2">
      <div className="product-thumb">
        <Link href={`/books/${book.slug}`}>
          <Image
            src={frontImage}
            alt={book.title || "Book"}
            width={120}
            height={160}
            className="object-cover rounded"
          />
        </Link>
      </div>

      <div className="product-content">
        <h6 className="product-title">
          <Link href={`/books/${book.slug}`}>{book.title || "Untitled"}</Link>
        </h6>

        {book.author && <span className="product-author">{book.author}</span>}
      </div>
    </div>
  );
};

export default BookListItem;
