"use client";
import { useState, useEffect, useRef } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

export default function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // State to control animation
  const menuRef = useRef(null);

  const handleClick = () => {
    setIsAnimating(true); // Start the animation
    setIsMenuOpen(true); // Set menu open state
  };

  const handleLinkClick = () => {
    setIsAnimating(false); // Start the closing animation
    setTimeout(() => setIsMenuOpen(false), 300); // Delay to allow the closing animation
  };

  // Close the menu if clicked outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsAnimating(false); // Start the closing animation
        setTimeout(() => setIsMenuOpen(false), 300); // Delay for animation duration
      }
    };

    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative">
      <button onClick={handleClick}>
        <IoReorderThreeOutline className="text-white text-4xl" />
      </button>
      <div
        ref={menuRef}
        className={`fixed right-0 w-[60vw] h-full z-10 top-0 bg-[#5F2EEA] text-white text-2xl transition-all ease-in-out duration-300 transform ${
          isMenuOpen && isAnimating
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center w-full">
          <a href="#" className="p-4" onClick={handleLinkClick}>
            HOME
          </a>
          <a href="#about" className="p-4" onClick={handleLinkClick}>
            ABOUT
          </a>
          <a href="#speakers" className="p-4" onClick={handleLinkClick}>
            SPEAKERS
          </a>
          <a href="#timeline" className="p-4" onClick={handleLinkClick}>
            TIMELINE
          </a>
          <a href="#partners" className="p-4" onClick={handleLinkClick}>
            PARTNERS
          </a>
          <a href="#faq" className="p-4" onClick={handleLinkClick}>
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
}
