"use client";
import React, { useEffect, useState } from "react";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-9 right-3 z-50 w-10 h-10 -translate-x-1/2 transform hover:bg-black hover:text-white hover:border-gray-800 hover:border-2 rounded-full bg-yellow-400 p-0 text-black flex justify-center items-center shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <FontAwesomeIcon icon={faChevronUp} size="sm" />
    </button>
  );
};

export default ScrollToTopButton;