import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/header/Header";
import FooterOne from "@/components/footer/FooterOne";
import { ReadingInsights } from "@/data/ReadingInsights";

const SingleBlogPage = ({ params }) => {
  const blog = ReadingInsights.find((item) => item.slug === params.slug);

  if (!blog) notFound();

  return (
    <>
      <Header />

      <main className="main-wrapper">
        <div className="axil-blog-area axil-section-gap">
          <div className="container">
            {blog.featureImg && (
              <div className="post-thumbnail mb--40">
                <Image
                  src={blog.featureImg}
                  width={1290}
                  height={600}
                  alt={blog.title}
                  className="w-100"
                />
              </div>
            )}

            <div className="row">
              <div className="col-lg-8">
                <div className="post-heading">
                  <h1 className="title">{blog.title}</h1>

                  <div className="axil-post-meta">
                    <div className="post-meta-content">
                      <h6 className="author-title">
                        {blog.author_name ?? "Editorial Team"}
                      </h6>
                      <ul className="post-meta-list">
                        <li>{blog.date}</li>
                        {blog.views && <li>{blog.views} views</li>}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="single-blog-content mt--30"
                  dangerouslySetInnerHTML={{
                    __html: blog.content,
                  }}
                />
              </div>

              <div className="col-lg-4">
                <aside className="axil-sidebar-area">
                  <div className="widget">
                    <h5 className="title">Category</h5>
                    <p>{blog.cate}</p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterOne />
    </>
  );
};
export default SingleBlogPage;
