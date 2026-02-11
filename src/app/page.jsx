import { BooksAPI } from "@/data/Books";
import CategoryBooks from "@/components/category/CategoryBooks";
import Section from "@/components/elements/Section";
import SectionTitle from "@/components/elements/SectionTitle";
import SlickSlider from "@/components/elements/SlickSlider";

import FooterOne from "@/components/footer/FooterOne";
import Header from "@/components/header/Header";
import Banner from "@/components/hero-banner/Banner";
import BlogTwo from "@/components/blog/BlogTwo";
import BookSliderCard2 from "@/components/books/BookSliderCard2";
import BookListItem from "@/components/books/BookListItem";
import BookIsotop from "@/components/bookTop/BookIsotop";

import { ReadingInsights } from "@/data/ReadingInsights";
import Service from "@/components/services/Service";

const Home = () => {
  const books = BooksAPI.books.filter((book) => book?.images?.front);

  return (
    <>
      <Header />

      <main className="main-wrapper">
        {/* Hero */}
        <Banner />

        {/* Browse by Category */}
        <CategoryBooks />

        {/* Popular Books */}
        <Section
          pClass="axil-best-seller-product-area pb--0"
          borderBottom="pb--50"
        >
          <SectionTitle
            title="Popular Books"
            subtitle="Readers’ Choice"
            subtitleIcon="far fa-book"
            subColor="highlighter-primary"
          />

          <SlickSlider
            class="slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide product-slide-mobile"
            slidesToShow={4}
            infinite={false}
            responsive={[
              { breakpoint: 991, settings: { slidesToShow: 3 } },
              { breakpoint: 767, settings: { slidesToShow: 2 } },
              { breakpoint: 575, settings: { slidesToShow: 1 } },
            ]}
          >
            {books.slice(0, 15).map((book) => (
              <BookSliderCard2 key={book.id} book={book} />
            ))}
          </SlickSlider>
        </Section>

        {/* Trending Books */}
        <Section pClass="axil-most-sold-product pb--0" borderBottom="pb--50">
          <SectionTitle
            title="Most Requested This Week"
            subtitle="Trending Reads"
            subtitleIcon="fas fa-star"
            subColor="highlighter-primary"
            pClass="section-title-center"
          />

          <BookIsotop />

          <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 row--15">
            {books.slice(0, 9).map((book) => (
              <div className="col" key={book.id}>
                <BookListItem book={book} />
              </div>
            ))}
          </div>
        </Section>

        {/* Why RWM */}
        <Service />

        {/* Blog */}
        <Section>
          <SectionTitle
            title="Latest Reading Insights"
            subtitle="Faith & Growth"
            subtitleIcon="fas fa-feather"
            subColor="highlighter-primary"
            pClass="section-title-center"
          />

          <div className="row g-5">
            {ReadingInsights.slice(0, 3).map((post) => (
              <div className="col-lg-4" key={post.id}>
                <BlogTwo posts={post} />
              </div>
            ))}
          </div>
        </Section>
      </main>

      <FooterOne dark />
    </>
  );
};

export default Home;
