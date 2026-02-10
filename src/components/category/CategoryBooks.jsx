

// "use client";

// import Image from "next/image";
// import { useState, useMemo } from "react";
// import Link from "next/link";
// import SectionTitle from "../elements/SectionTitle";
// import SlickSlider from "../elements/SlickSlider";
// import Section from "../elements/Section";
// import { BooksAPI } from "@/data/Books";
// import { Category } from "@/data/BookCategory";
// import { slugify } from "@/utils";

// const CategoryBooks = () => {

//   const books = useMemo(() => {
//       if (Array.isArray(BooksAPI)) return BooksAPI;
//       if (Array.isArray(BooksAPI?.books)) return BooksAPI.books;
//       return [];
//     }, []);

//       const [filteredBooks, setFilteredBooks] = useState(books);
//       const [bookShow, setBookShow] = useState(12);


//      const categoryHandler = (e) => {
//        const value = e.target.value;

//        if (value === "all") {
//          setFilteredBooks(books);
//        } else {
//          setFilteredBooks(
//            books.filter((book) => slugify(book.category) === value)
//          );
//        }
//      };

//   const topics = Category[0]?.topic || [];

//    if (!topics.length) return null;

//   return (
//     <Section pClass="axil-categorie-area pb--0" borderBottom="pb--50">
//       {/* ✅ EXACT original heading order */}

//       <SectionTitle
//         subtitle="Categories"
//         subtitleIcon="far fa-shopping-basket"
//         title="Browse by Category"
//         subColor="highlighter-secondary"
//       />
//       <div className="col-lg-9">
//         <select className="single-select" onChange={categoryHandler}>
//           <option value="all">All Categories</option>
//           {[...new Set(books.map((b) => b.category))].map((cat, idx) => (
//             <option key={idx} value={slugify(cat)}>
//               {cat}
//             </option>
//           ))}
//         </select>
//       </div>
//       <SlickSlider
//         class="slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide"
//         slidesToShow={6}
//         infinite={false}
//         responsive={[
//           { breakpoint: 1199, settings: { slidesToShow: 5 } },
//           { breakpoint: 991, settings: { slidesToShow: 4 } },
//           { breakpoint: 767, settings: { slidesToShow: 3 } },
//           { breakpoint: 479, settings: { slidesToShow: 2 } },
//           { breakpoint: 400, settings: { slidesToShow: 1 } },
//         ]}
//       >
//         {topics.map((item, index) => (
//           <div className="categrie-product categrie-product-3" key={index}>
//             <Link href={`/books?category=${item.slug}`}>
//               <Image
//                 src={item.thumb}
//                 width={160}
//                 height={105}
//                 alt={item.name}
//                 className="rounded-md object-cover"
//               />
//               <h6 className="cat-title">{item.name}</h6>
//             </Link>
//           </div>
//         ))}
//       </SlickSlider>
//     </Section>
//   );
// };

// export default CategoryBooks;

"use client";

import Image from "next/image";
import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SectionTitle from "../elements/SectionTitle";
import SlickSlider from "../elements/SlickSlider";
import Section from "../elements/Section";
import { BooksAPI } from "@/data/Books";
import { Category } from "@/data/BookCategory";
import { slugify } from "@/utils";

const CategoryBooks = () => {
  const router = useRouter();

  const books = useMemo(() => {
    if (Array.isArray(BooksAPI)) return BooksAPI;
    if (Array.isArray(BooksAPI?.books)) return BooksAPI.books;
    return [];
  }, []);

  const topics = Category[0]?.topic || [];
  if (!topics.length) return null;

  // ✅ Redirect handler
  const categoryHandler = (e) => {
    const value = e.target.value;

    if (value === "all") {
      router.push("/books");
    } else {
      router.push(`/books?category=${value}`);
    }
  };

  return (
    <Section pClass="axil-categorie-area pb--0" borderBottom="pb--50">
      <SectionTitle
        subtitle="Categories"
        subtitleIcon="far fa-shopping-basket"
        title="Browse by Category"
        subColor="highlighter-secondary"
      />

      {/* Dropdown */}
      <div className="row mb--30">
        <div className="col-lg-4">
          <select className="single-select" onChange={categoryHandler}>
            <option value="all">All Categories</option>
            {[...new Set(books.map((b) => b.category))].map((cat, idx) => (
              <option key={idx} value={slugify(cat)}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Category slider */}
      <SlickSlider
        class="slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide"
        slidesToShow={6}
        infinite={false}
        responsive={[
          { breakpoint: 1199, settings: { slidesToShow: 5 } },
          { breakpoint: 991, settings: { slidesToShow: 4 } },
          { breakpoint: 767, settings: { slidesToShow: 3 } },
          { breakpoint: 479, settings: { slidesToShow: 2 } },
          { breakpoint: 400, settings: { slidesToShow: 1 } },
        ]}
      >
        {topics.map((item, index) => (
          <div className="categrie-product categrie-product-3" key={index}>
            <Link href={`/books?category=${item.slug}`}>
              <Image
                src={item.thumb}
                width={160}
                height={105}
                alt={item.name}
                className="rounded-md object-cover"
              />
              <h6 className="cat-title">{item.name}</h6>
            </Link>
          </div>
        ))}
      </SlickSlider>
    </Section>
  );
};

export default CategoryBooks;