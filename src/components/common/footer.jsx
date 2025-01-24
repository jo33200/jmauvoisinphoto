
import Link from "next/link";
import { Oswald } from 'next/font/google';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
});


const Footer = () => {
  return (
    <footer className="flex h-auto w-full flex-col items-start justify-start gap-10 bg-black px-0 pb-8 pt-5 text-white sm:items-center">
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
      <section className="flex w-full flex-col lg:flex-row lg:justify-around lg:gap-0 bg-zinc-900 p-4">
      
        <article className="flex flex-col items-start justify-start gap-1 text-left ">
          <Image
            src="/jeanProfil.jpg"
            alt="Jean Mauvoisin"
            width={200}
            height={200}
            className="rounded-full"
          />
        </article>
        <div className="flex flex-col items-start justify-start gap-4 text-left lg:flex-row lg:gap-4 lg:justify-center">
        <nav
          aria-label="Navigation de pied de page"
          className="h-auto w-[230px]"
        >
          <ul className="flex flex-col items-start justify-start gap-2 text-left">
            <li className="font-bold pb-2">Prestations</li>
            <li>
              <Link href="/galerie" className="hover:underline">
                Galerie
              </Link>
            </li>
            <li>
              <Link href="/prestations" className="hover:underline">
                Formation
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Mon univers
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Partenariat
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="h-auto w-[230px]">
          <ul className="flex flex-col items-start justify-start gap-3 text-left">
            <li className="font-bold pb-1">Contact</li>
            <li>
                <a
                  href="mailto:jmauvoisin@free.fr"
                  className="hover:cursor-pointer"
                  aria-label="Envoyer un e-mail à Indenum"
                >
                  jmauvoisin@free.fr
                </a>
            </li>
            <li className="flex items-center justify-start gap-8">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
              <FontAwesomeIcon icon={faInstagram} size="xl" />
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </li>
          </ul>
        </nav>
        <nav
          aria-label="Navigation de pied de page"
          className="h-auto w-[230px]"
        >
          <ul className="flex flex-col items-start justify-start gap-2 text-left">
            <li className="font-bold pb-2">Informations</li>
            <li>
              <Link href="/" className="hover:underline">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Conditions générales de vente
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Politique de retour
              </Link>
            </li>
          </ul>
        </nav>
        </div>
      </section>
      <section className="flex items-center justify-center gap-2">
        <p className="text-sm text-left text-gray-400">
          Copyright © 2025
        </p>
        <p className="text-md text-left text-white font-normal">
          Jean MAUVOISIN
        </p>
        <p className="text-sm text-left text-gray-400">
          | Tous droits réservés.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
