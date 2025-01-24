'use client';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-9 right-3 z-50 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-yellow-400 p-0 text-black shadow-lg transition-opacity duration-300 hover:border-2 hover:border-gray-800 hover:bg-black hover:text-white ${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <FontAwesomeIcon icon={faChevronUp} size="sm" />
    </button>
  );
};

export default ScrollToTopButton;
