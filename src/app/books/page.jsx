import Header from "@/components/header/Header";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import StoreShelf from "./StoreShelf";

export default function StorePage() {
  return (
    <>
      <Header />
      <Breadcrumb title="Book Store" activeItem="Books" />

      <main className="main-wrapper">
        <StoreShelf />
      </main>

      <FooterOne />
    </>
  );
}
