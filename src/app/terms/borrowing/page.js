"use client";

import Header from "@/components/header/Header";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Section from "@/components/elements/Section";

const BorrowingTerms = () => {
  return (
    <>
      <Header />

      <main className="main-wrapper">
        <Breadcrumb
          activeItem="Borrowing Terms"
          title="Terms & Conditions for Borrowing Books"
        />

        <Section pClass="axil-terms-area">
          <div className="container">
            <div className="terms-content mx-auto" style={{ maxWidth: 900 }}>
              <p className="mb-4 text-muted">
                Last updated: <strong>{new Date().toLocaleDateString()}</strong>
              </p>

              <p>
                By borrowing a book from{" "}
                <strong>RWM (Read With Me)</strong>, you agree to the
                following terms and conditions. These guidelines help us ensure
                fairness, accountability, and respect for shared resources.
              </p>

              <h4>1. Eligibility to Borrow</h4>
              <ul>
                <li>
                  Borrowing is open to individuals who complete the official RWM
                  Book Rental Form.
                </li>
                <li>Accurate contact details must be provided.</li>
                <li>
                  RWM reserves the right to approve or decline any borrowing
                  request.
                </li>
              </ul>

              <h4>2. Borrowing Period</h4>
              <ul>
                <li>
                  The standard borrowing period is <strong>20 days</strong>,
                  starting from the date the book is received.
                </li>
                <li>
                  Extension requests must be made before the due date and are
                  subject to availability.
                </li>
              </ul>

              <h4>3. Book Care & Responsibility</h4>
              <p>
                Borrowed books must be handled with care and returned in good
                condition. Normal wear from careful reading is acceptable.
              </p>

              <h4>4. Late Returns</h4>
              <ul>
                <li>Late returns may attract reminder notifications.</li>
                <li>
                  Repeated late returns may lead to temporary suspension of
                  borrowing privileges.
                </li>
              </ul>

              <h4>5. Lost or Damaged Books</h4>
              <p>
                If a book is lost or significantly damaged, the borrower may be
                required to replace the book or cover the replacement cost as
                determined by RWM.
              </p>

              <h4>6. Use of Borrowed Books</h4>
              <ul>
                <li>Borrowed books are for personal reading only.</li>
                <li>
                  Books must not be resold, rented out, or reproduced in any
                  form.
                </li>
              </ul>

              <h4>7. Changes to These Terms</h4>
              <p>
                RWM reserves the right to update these terms at any time. Any
                changes will be reflected on this page.
              </p>

              <h4>8. Contact</h4>
              <p>
                For questions or support, please contact us at:
                <br />
                <strong>info@rwm.com</strong>
              </p>

              <p className="mt-5 font-italic">
                By submitting a book rental request, you confirm that you have
                read, understood, and agreed to these Terms & Conditions.
              </p>
            </div>
          </div>
        </Section>
      </main>

      <FooterOne />
    </>
  );
};

export default BorrowingTerms;
