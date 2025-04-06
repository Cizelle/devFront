"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import FlowingMenu from "./FlowingMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This ensures the component is only interacting with client-side features after hydration
    setIsMounted(true);
    const user = localStorage.getItem("currentUser");
    try {
      if (user) {
        const parsedUser = JSON.parse(user);
        setUsername(parsedUser.username);
      }
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/"; // redirect to start page
  };

  const demoItems = [
    {
      link: "/",
      text: "Home",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "/",
      text: "About",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "/",
      text: "Pricing",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "/",
      text: "Contact Us",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

  return (
    <div className="relative w-full">
      <nav className="w-full flex justify-between items-center px-8 py-5 bg-purple-700 text-white fixed top-0 left-0 z-50">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-student-glyph-black-icon-png-image_691145.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-3xl font-bold">Devians</h1>
        </div>

        {/* Center: Welcome Message (only after mount) */}
        {isMounted && username && (
          <div className="text-xl font-semibold hidden md:block">
            Welcome, <span className="font-bold">{username}</span>
          </div>
        )}

        {/* Right: Menu + Logout */}
        <div className="flex items-center space-x-4">
          {isMounted && username && (
            <button
              onClick={handleLogout}
              className="font-bold bg-purple-500 shadow-purple-900 rounded-full p-2 md:p-2 cursor-pointer"
            >
              Logout
            </button>
          )}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 text-lg font-bold focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </motion.div>
            <span className="ml-2">{isOpen ? "CLOSE" : "MENU"}</span>
          </motion.button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed inset-0 bg-purple-700 flex flex-col items-center justify-center text-white text-3xl z-40"
          >
            <FlowingMenu items={demoItems} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
