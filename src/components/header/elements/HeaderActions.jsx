"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { mobileMenu } from "@/store/slices/menuSlice";
import BookSearchModal from "./BookSearchModal";


const HeaderActions = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="header-action">
      <ul className="action-list">
        {/* Search */}
        <li>
          <button onClick={() => setSearchOpen(true)} title="Search Books">
            <i className="far fa-search" />
          </button>
        </li>

        {/* Profile / Sign In */}
        {/* <li>
          <Link href="/sign-in" title="Sign In">
            <i className="far fa-user" />
          </Link>
        </li> */}

        {/* Mobile Menu Toggle */}
        <li className="axil-mobile-toggle">
          <button onClick={() => dispatch(mobileMenu(true))}>
            <i className="fal fa-bars"></i>
          </button>
        </li>
      </ul>

      {/* Book Search Modal */}
      <BookSearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
};

export default HeaderActions;
