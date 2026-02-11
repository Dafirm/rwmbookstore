"use client";

import { useState } from "react";
import Image from "next/image";

const BlogCard = ({ blog, isAdmin = false }) => {
  const [showMore, setShowMore] = useState(false);

  const handleDelete = () => {
    if (!isAdmin) return;

    const storedBlogs = JSON.parse(localStorage.getItem("BlogsAPI")) || [];
    const filtered = storedBlogs.filter((item) => item.id !== blog.id);
    localStorage.setItem("BlogsAPI", JSON.stringify(filtered));
    alert("Blog deleted successfully!");
    window.location.reload();
  };

  return (
    <div className="blog-card p--20 bg-color-white rounded--10 shadow--sm mb--20">
      {/* Header */}
      <div className="blog-header mb--15">
        {blog.featureImg && (
          <Image
            src={blog.featureImg}
            alt={blog.title}
            width={640}
            height={360}
            className="w-100 rounded-lg mb--10"
            style={{ objectFit: "cover", maxHeight: "250px" }}
          />
        )}

        <h5 className="blog-title mb--5">{blog.title}</h5>
        {blog.author_name && (
          <p className="blog-author mb--5">by {blog.author_name}</p>
        )}
        {blog.date && blog.views && (
          <p className="blog-meta text-gray-500 text-sm">
            {blog.date} • {blog.views} views
          </p>
        )}
        {blog.cate && (
          <p className="blog-category text-sm text-primary">{blog.cate}</p>
        )}
      </div>

      {/* Content */}
      <div className="blog-content mb--10">
        {showMore ? (
          <div
            className="blog-full-content text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        ) : (
          <p className="blog-excerpt text-gray-700">{blog.excerpt}</p>
        )}
      </div>

      {/* Actions */}
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="axil-btn btn-bg-primary btn-sm"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Read More"}
        </button>

        {isAdmin && (
          <button
            className="axil-btn btn-bg-danger btn-sm"
            onClick={handleDelete}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
