


"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/Header";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Section from "@/components/elements/Section";
import SectionTitle from "@/components/elements/SectionTitle";
import Service from "@/components/services/Service";
import WhoWeAreCard from "@/components/about/whoWeAreCard";

import {
  AboutStore,
  AboutAchievement,
  AboutFeatures,
  WhoWeAreData,
  WhoWeAreGallery,
} from "@/data/About";

const AboutUs = () => {
  return (
    <>
      <Header headerSlider />

      <main className="main-wrapper">
        {/* Breadcrumb */}
        <Breadcrumb activeItem="About Us" title="About RWM" />

        {/* About Store */}
        <Section pClass="axil-about-area about-style-1">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <Image
                src={AboutStore.thumbnail}
                alt="About RWM"
                width={420}
                height={501}
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="col-xl-8 col-lg-6">
              <span className="title-highlighter highlighter-primary2">
                <i className={AboutStore.subtitleIcon} /> {AboutStore.subtitle}
              </span>
              <h3 className="title">{AboutStore.title}</h3>
              <span className="text-heading">{AboutStore.higlightLine}</span>

              <div className="row mt--20">
                {AboutStore.description.map((text, idx) => (
                  <div className="col-xl-6" key={idx}>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Achievements */}
        <Section>
          <div className="row row--20">
            {AboutAchievement.map((item, idx) => (
              <div className="col-lg-4" key={idx}>
                <div className="about-info-box text-center">
                  <Image
                    src={item.icon}
                    width={60}
                    height={60}
                    alt={item.title}
                  />
                  <h6 className="title mt--10">{item.title}</h6>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Features */}
        <Section>
          {AboutFeatures.map((feature, idx) => (
            <div className="row align-items-center mb--80" key={idx}>
              <div className={`col-lg-5 ${idx % 2 ? "order-lg-2" : ""}`}>
                <Image
                  src={feature.thumbnail}
                  width={345}
                  height={240}
                  alt={feature.title}
                  className="rounded-lg"
                />
              </div>
              <div className={`col-lg-7 ${idx % 2 ? "order-lg-1" : ""}`}>
                <span className="subtitle">{feature.subtitle}</span>
                <h4 className="title">{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </Section>

        {/* Single CTA */}
        <Section>
          <div className="text-center">
            <Link href="/contact" className="axil-btn btn-bg-primary">
              Get In Touch
            </Link>
          </div>
        </Section>

        {/* Who We Are */}
        <Section>
          <SectionTitle
            title="Who We Are"
            subtitle="RWM Identity"
            subtitleIcon="fas fa-book-reader"
            pClass="section-title-center"
          />

         
          <div className="container who-we-are-container">
            <div className="row g-3 mt--40">
              {WhoWeAreData.map((item, idx) => (
                <div key={idx} className="col-xl-3 col-md-6 col-12 d-flex">
                  <WhoWeAreCard data={item} image={WhoWeAreGallery[idx]} />
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Service />
      </main>

      <FooterOne />
    </>
  );
};

export default AboutUs;
