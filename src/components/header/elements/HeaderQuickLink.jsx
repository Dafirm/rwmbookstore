

import Link from "next/link";

const HeaderQuickLink = () => (
  <div className="header-top-link">
    <ul className="quick-link">
      <li>
        <Link href="/community">Join Community</Link>
      </li>
      <li>
        <Link href="/request-book">Request a Book</Link>
      </li>
    </ul>
  </div>
);

export default HeaderQuickLink;