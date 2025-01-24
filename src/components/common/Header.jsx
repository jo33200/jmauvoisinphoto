'use client';

import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Oswald } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clientPathname, setClientPathname] = useState(null);
  const pathname = usePathname();

  // Synchronisation de `pathname` côté client pour éviter les erreurs d'hydratation
  useEffect(() => {
    setClientPathname(pathname);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-black md:relative">
      <div className="flex items-center justify-between px-4 py-2 lg:px-10">
        {/* Logo */}
        <section>
          <Link href="/" className="flex flex-col items-start">
            <span
              className={`text-3xl font-bold text-white ${oswald.variable}`}
            >
              JEAN MAUVOISIN
            </span>
            <span className="text-sm text-white">Auteur-Photographe</span>
          </Link>
        </section>

        {/* Navigation principale */}
        <section className="hidden items-center gap-10 md:flex">
          <nav aria-label="Navigation principale">
            <ul className="flex gap-10">
              {[
                { href: '/presentation', label: 'Présentation' },
                { href: '/galerie', label: 'Galerie' },
                { href: '/prestation', label: 'Prestations' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-base font-semibold ${
                      clientPathname === link.href ? 'text-white' : 'text-white'
                    } transition-transform hover:scale-110`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Liens sociaux */}
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/media/set/?set=a.1398767135193&type=3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-transform hover:scale-110 hover:text-gray-400"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Link>
            <Link
              href="https://www.instagram.com/jean_mauvoisin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-transform hover:scale-110 hover:text-gray-400"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jean-mauvoisin-207a5335/?originalSubdomain=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-transform hover:scale-110 hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </Link>
          </div>
        </section>

        {/* Menu burger pour les petits écrans */}
        <section className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </section>
      </div>

      {/* Menu déroulant pour petits écrans */}
      {isMenuOpen && (
        <section className="absolute left-0 top-16 z-40 w-full bg-black text-white md:hidden">
          <nav
            aria-label="Navigation principale mobile"
            className="flex flex-col items-center py-8"
          >
            <ul className="w-full text-center text-lg">
              {[
                { href: '/presentation', label: 'Présentation' },
                { href: '/galerie', label: 'Galerie' },
                { href: '/prestation', label: 'Prestations' },
              ].map((link) => (
                <li key={link.href} className="py-4">
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                    className={`block ${
                      clientPathname === link.href ? 'text-white' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Liens sociaux pour mobile */}
            <div className="mt-6 flex gap-6">
              <Link
                href="https://www.facebook.com/media/set/?set=a.1398767135193&type=3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-transform hover:scale-110 hover:text-gray-400"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </Link>
              <Link
                href="https://www.instagram.com/jean_mauvoisin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-transform hover:scale-110 hover:text-gray-400"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jean-mauvoisin-207a5335/?originalSubdomain=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-transform hover:scale-110 hover:text-gray-400"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </Link>
            </div>
          </nav>
        </section>
      )}
    </header>
  );
};

export default Header;
