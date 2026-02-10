
"use client";

import Image from "next/image";
import Header from "@/components/header/Header";
import FooterOne from "@/components/footer/FooterOne";

export default function NotFound() {
  return (
    <>
      {/* <Header /> */}
      <main className="main-wrapper">
        <section className="error-page onepage-screen-area">
          <div className="container">
            <div className="row align-items-center">
              {/* Text content */}
              <div className="col-lg-6">
                <div className="content">
                  <span className="title-highlighter highlighter-secondary">
                    <i className="fal fa-exclamation-circle" /> Oops!
                  </span>
                  <h1 className="title">Page not found</h1>
                  <p>
                    The page you are looking for doesn’t exist or has been
                    moved.
                  </p>

                  {/* Buttons */}
                  <div className="error-buttons mt-4">
                    {/* Back to Home in new tab */}
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="axil-btn btn-bg-secondary me-3"
                    >
                      Back To Home <i className="fal fa-long-arrow-right" />
                    </a>

                    {/* Go back in same tab */}
                    <button
                      onClick={() => window.history.back()}
                      className="axil-btn btn-outline"
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="col-lg-6">
                <Image
                  src="/images/others/404.png"
                  width={1000}
                  height={643}
                  alt="404"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <FooterOne /> */}
    </>
  );
}