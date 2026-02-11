import Link from "next/link";
import Image from "next/image";

const BookSliderCard2 = ({ book }) => {
  return (
    <div className="axil-product product-style-five rwm-book-card row mb--40">
      {/* CARD IMAGE FRAME */}
      {/* <div className="categrie-product categrie-product-3 key={index} ">
        <Link href={`/books/${book.slug}`}>
          <Image
            src={book.images?.front || "/images/books/default.png"}
            alt={book.title}
            width={160}
            height={105}
            className="rounded-md object-cover"
          />
        </Link>
      </div> */}
      <div className="categrie-product categrie-product-3">
        <Link href={`/books/${book.slug}`}>
          <Image
            src={book.images?.front || "/images/books/default.png"}
            alt={book.title}
            width={160}
            height={105}
            className="rounded-md object-cover"
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

