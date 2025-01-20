"use client";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 h-auto w-full bg-black md:relative">
      <div className="flex h-auto w-full flex-row items-center justify-between px-4 py-2 lg:px-10">
        <section >
            <Link href="/" className="flex flex-col items-start justify-center">
              <span
                className={`text-white font-bold text-3xl ${oswald.variable}`}
              >
                JEAN MAUVOISIN
              </span>
              <span className="text-white">Auteur-Photographe</span>
            </Link>
        </section>

        <section className="hidden md:flex">
          <nav aria-label="Navigation principale" className="w-full">
            <ul className="flex w-full items-center justify-center text-sm md:w-auto md:gap-5 md:text-base lg:gap-10">
              {[{ href: "/presentation", label: "Présentation" }, { href: "/galerie", label: "Galerie" }, { href: "/prestation", label: "Prestations" }].map(
                (link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`font-semibold text-white ${
                        pathname === link.href ? "text-white" : ""
                      }`}
                    >
                      <span
                        className={`inline-block transition-transform ${
                          pathname === link.href
                            ? "scale-125"
                            : "hover:scale-110"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </section>

        <section className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </section>
      </div>

      {isMenuOpen && (
        <section className="h-screen bg-white md:hidden">
          <nav
            aria-label="Navigation principale"
            className="flex flex-col items-center bg-white pt-8 md:hidden"
          >
            <ul className="w-full text-center text-3xl">
              {[{ href: "/presentation", label: "Présentation" }, { href: "/galerie", label: "Galerie" }, { href: "/prestation", label: "Prestations" }].map(
                (link) => (
                  <li className="py-5" key={link.href}>
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className={`${
                        pathname === link.href ? "text-white" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </section>
      )}
    </header>
  );
};

export default Header;
