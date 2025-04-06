"use client";
import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { ReactLenis } from "lenis/react";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [passwordArray, setPasswordArray] = useState([]);
  const router = useRouter();

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showPassword = () => {
    if (ref.current.src.includes("/eyecross.png")) {
      ref.current.src = "/eye.png";
      passwordRef.current.type = "password";
    } else {
      passwordRef.current.type = "text";
      ref.current.src = "/eyecross.png";
    }
  };

  const handleSubmit = () => {
    if (
      !form.email ||
      !form.username ||
      !form.password ||
      !form.confirmpassword
    ) {
      alert("Fill up all the details");
      return;
    }
    if (!form.email.includes("@")) {
      alert("Enter a valid email address");
      return;
    }
    if (form.password !== form.confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    const newEntry = { ...form, id: uuidv4() };
    const updatedPasswords = [...passwordArray, newEntry];
    setPasswordArray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));

    // ✅ Save current username for navbar
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ username: form.username })
    );

    setForm({ email: "", username: "", password: "", confirmpassword: "" });

    alert("Login Successful");
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };

  return (
    <ReactLenis root>
      <div className="flex min-h-screen w-full">
        <div className="w-1/2 flex justify-center items-center p-10">
          <div className="w-96 text-center">
            <h2 className="text-6xl font-bold mb-14 tracking-tight subpixel-antialiased">
              LOGIN !
            </h2>
            <input
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full p-3 mb-6 border border-purple-500 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-700"
              type="email"
              name="email"
            />
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="w-full p-3 mb-6 border border-purple-500 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-700"
              type="text"
              name="username"
            />
            <div className="relative w-full">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full p-3 pr-10 mb-6 border border-purple-500 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-700"
                type="password"
                name="password"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={showPassword}
              >
                <img ref={ref} width={28} src="/eye.png" alt="eye" />
              </span>
            </div>
            <input
              value={form.confirmpassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full p-3 mb-6 border border-purple-500 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-700"
              type="password"
              name="confirmpassword"
            />
            <button
              onClick={handleSubmit}
              className="w-full cursor-pointer animate-bounce mt-6 bg-purple-700 text-white font-bold p-3 rounded-full hover:bg-purple-800 transition duration-200"
            >
              Continue
            </button>
          </div>
        </div>

        <div
          className="w-1/2 h-screen bg-cover bg-center border-2 border-solid"
          style={{ backgroundImage: "url('/login_page.jpg')" }}
        ></div>
      </div>
    </ReactLenis>
  );
};

export default Manager;
