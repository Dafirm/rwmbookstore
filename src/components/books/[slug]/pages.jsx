import { BooksAPI } from "@/data/Books";

export default function BookDetailPage({ params }) {
  const { slug } = params;

  const books = Array.isArray(BooksAPI) ? BooksAPI : BooksAPI.books || [];

  const book = books.find((b) => b.slug === slug);

  if (!book) {
    return <h2 style={{ padding: 40 }}>Book not found</h2>;
  }

  return (
    <div className="container py-12">
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      {/* Later: full details, images, actions */}
    </div>
  );
}
