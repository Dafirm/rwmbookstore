import Link from "next/link";
import Image from "next/image";

const BookStoreCard = ({ book }) => {
  return (
    <div className="axil-product product-style-one rwm-book-card">
      <div className="product-thumb">
        <Link href={`/books/${book.slug}`}>
          <Image
            src={book.images?.front}
            alt={book.title}
            width={200}
            height={300}
            className="book-cover"
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

export default BookStoreCard;
