"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
      form.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      localStorage.setItem("isAdminLoggedIn", "true");
      toast.success("Admin logged in successfully ✅");
      router.push("/admin/dashboard");
    } else {
      toast.error("Invalid credentials ❌");
    }
  };

  return (
    <div className="container pt--100 pb--100">
      <div className="card p--30 mx-auto shadow-lg" style={{ maxWidth: 420 }}>
        {/* TITLE */}
        <h2 className="title text-center mb--10">Admin Login</h2>
        <p className="text-center text-muted mb--30">Authorized access only</p>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb--15">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="admin@rwm.com"
            />
          </div>

          <div className="form-group mb--25">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="••••••••"
            />
          </div>

          {/* ACTION BUTTONS */}
          <div className="d-flex flex-column gap-3">
            <button type="submit" className="axil-btn btn-bg-primary w-100">
              Login
            </button>

            <button
              type="button"
              className="axil-btn btn-outline-secondary w-100"
              onClick={() => router.push("/")}
            >
              Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
