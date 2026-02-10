


"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { ScocialLink } from "@/data/Common";
import { FooterData } from "@/data/Footer";
import ProductQuickView from "../books/elements/ProductQuickView";

const FooterOne = () => {
  const { quickView } = useSelector((state) => state.productData);

  return (
    <>
      <footer className="axil-footer-area footer-style-2">
        {/* TOP */}
        <div className="footer-top separator-top">
          <div className="container">
            <div className="row gy-4 justify-content-center footer-middle">
              {/* SUPPORT */}

              {/* QUICK LINKS */}
              {FooterData.footerLink.slice(0, 2).map((items, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <div className="axil-footer-widget footer-center">
                    <h5 className="widget-title">{items.label}</h5>
                    <div className="inner">
                      <ul className="footer-link-list">
                        {items.linkList.map((link, idx) => (
                          <li key={idx}>
                            <Link href={link.url}>{link.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              {/* SOCIAL */}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="copyright-area copyright-default separator-top">
          <div className="container">
            <div className="row align-items-center text-center gy-2">
              <div className="col-12">
                <ul className="quick-link footer-bottom-links">
                  <li>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: FooterData.footerInfo.address,
                      }}
                    />
                  </li>
                  <li>
                    <a href={`mailto:${FooterData.footerInfo.email}`}>
                      <i className="fal fa-envelope-open" />
                      {FooterData.footerInfo.email}
                    </a>
                  </li>
                  <li>
                    <a href={ScocialLink.instagram.url} aria-label="Instagram">
                      <i className={ScocialLink.instagram.icon} />
                    </a>
                  </li>
                  <li>
                    © {new Date().getFullYear()} <strong>RWM</strong>. All
                    rights reserved.
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <span className="footer-credit">
                  Designed by <strong>Femi Oyeniyi</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {quickView && <ProductQuickView />}
    </>
  );
};

export default FooterOne;