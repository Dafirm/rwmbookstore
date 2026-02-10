

// src/app/layout.js
import { Providers } from '@/store/provider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "@/styles/style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "RWM | Faith & Reading Insights",
  description:
    "RWM is your hub for books, insights, and personal growth content.",
  keywords: ["reading", "faith", "books", "insights", "spiritual growth"],
  authors: [{ name: "RWM Editorial Team" }],
  metadataBase: new URL("https://rwmbooks.com"), // for social image URLs
  openGraph: {
    title: "RWM | Faith & Reading Insights",
    description: "Explore curated content and book insights from RWM.",
    url: "https://rwmbooks.com",
    siteName: "RWM",
    images: [
      {
        url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "RWM Reading Insights",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RWM | Faith & Reading Insights",
    description: "Explore curated content and book insights from RWM.",
    images: [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?fit=crop&w=1200&h=630",
    ],
  },
  icons: {
    icon: "https://rwmbooks.com/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/font-awesome.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
        </Providers>
      </body>
    </html>
  );
}