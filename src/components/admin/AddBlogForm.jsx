"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const AddBlogForm = ({ blogs, setBlogs }) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    excerpt: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title: form.title,
      author: form.author,
      cate: form.category,
      excerpt: form.excerpt,
      date: new Date().toLocaleDateString(),
      views: 0,
    };

    // Update state and localStorage
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("rwmBlogs", JSON.stringify(updatedBlogs));

    toast.success("Blog posted successfully ✅");

    // Reset form
    setForm({ title: "", author: "", category: "", excerpt: "" });
  };

  return (
    <div className="add-blog-form card p--30 mb--40">
      <h3 className="title mb--20">Add New Blog</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Excerpt</label>
          <textarea
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            required
          />
        </div>
        <button className="axil-btn btn-bg-primary mt--15">Post Blog</button>
      </form>
    </div>
  );
};

export default AddBlogForm;
