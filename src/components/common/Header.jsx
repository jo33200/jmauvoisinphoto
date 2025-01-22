'use client';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Oswald } from 'next/font/google';

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
        <section className="hidden md:flex">
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
                    className={`text-sm font-semibold ${
                      clientPathname === link.href ? 'text-white' : 'text-white'
                    } transition-transform hover:scale-110`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
          </nav>
        </section>
      )}
    </header>
  );
};

export default Header;
