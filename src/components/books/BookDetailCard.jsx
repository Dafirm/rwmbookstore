"use client";
import Image from "next/image";

const BookDetailCard = ({ book }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      {/* Front Cover */}
      <div className="flex justify-center">
        <Image
          src={book.images.front}
          alt={`${book.title} front cover`}
          width={260}
          height={380}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Back Cover */}
      <div className="flex justify-center">
        <Image
          src={book.images.back}
          alt={`${book.title} back cover`}
          width={260}
          height={380}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default BookDetailCard;
