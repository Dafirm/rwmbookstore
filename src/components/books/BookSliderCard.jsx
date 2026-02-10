

import Link from "next/link";
import Image from "next/image";

const BookSliderCard = ({ book }) => {
  // Google Form URLs
  const rentFormUrl = "https://forms.gle/ggG8DTvhngVLNT8G6";
  const buyFormUrl = "https://forms.gle/SRgTRrm8hkhjECR16";

  // Open Rent form with prefilled book title
  const handleRent = () => {
    const url = `${rentFormUrl}?entry.8720823235195030808=${encodeURIComponent(
      book.title
    )}`;
    window.open(url, "_blank");
  };

  // Open Buy form with prefilled book title
  const handleBuy = () => {
    const url = `${buyFormUrl}?entry.-6937497636707183151=${encodeURIComponent(
      book.title
    )}`;
    window.open(url, "_blank");
  };

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

        <div className="rwm-book-actions mt-3 flex justify-center gap-3">
          <button className="rwm-btn-outline" onClick={handleRent}>
            Rent
          </button>
          <button className="rwm-btn-outline" onClick={handleBuy}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookSliderCard;