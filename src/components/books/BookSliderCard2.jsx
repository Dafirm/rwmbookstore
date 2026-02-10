import Link from "next/link";
import Image from "next/image";

const BookSliderCard2 = ({ book }) => {
  return (
    <div className="axil-product product-style-five rwm-book-card">
      {/* CARD IMAGE FRAME */}
      <div className="rwm-book-image-wrapper">
        <Link href={`/books/${book.slug}`}>
          <Image
            src={book.images?.front || "/images/books/default.png"}
            alt={book.title}
            width={200}
            height={300}
            className="rwm-book-image"
          />
        </Link>
      </div>

      {/* CARD CONTENT */}
      <div className="product-content text-center">
        <h6 className="product-title">
          <Link href={`/books/${book.slug}`}>{book.title}</Link>
        </h6>

        <span className="author-name">{book.author}</span>

        {/* <div className="rwm-book-actions">
          <button className="rwm-btn-outline">Rent</button>
          <button className="rwm-btn-outline">Buy</button>
        </div> */}
      </div>
    </div>
  );
};

export default BookSliderCard2;
