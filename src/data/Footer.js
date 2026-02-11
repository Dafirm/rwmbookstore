const FooterData = {
  footerLink: [
    {
      label: "Account",
      linkList: [
        { name: "My Account", url: "/dashboard" },
        { name: "Borrowing Terms", url: "/terms/borrowing" }, // Replaced Login
        { name: "Request a Book", url: "https://forms.gle/ggG8DTvhngVLNT8G6" },
      ],
    },
    {
      label: "Quick Links",
      linkList: [
        { name: "Home", url: "/" },
        { name: "Store", url: "/books" },
        { name: "About", url: "/about" },
      ],
    },
    {
      label: "Legal",
      linkList: [
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms of Use", url: "/terms-of-use" },
      ],
    },
  ],
  footerInfo: {
    address: "Espoo, Finland",
    email: "info@rwm.com",
  },
  socialLinks: {
    instagram:
      "https://www.instagram.com/christian_talk_series?igsh=dXFtd3QwZm0zaDlv&utm_source=qr",
  },
};

export { FooterData };
