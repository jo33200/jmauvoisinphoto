import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative mt-28 min-h-screen bg-black py-2 sm:mt-20 md:mt-0">
      {/* Section Image d'Accueil */}
      <div className="relative w-full">
        <Image
          src="/jeanMamanSanka.jpg"
          alt="Jean"
          width="1900"
          height="1000"
          className="object-cover shadow-inner"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black mix-blend-multiply"></div>
      </div>

      {/* Section de Présentation */}
      <section id="presentation" className="relative z-10 mx-auto mt-10 max-w-4xl px-4 text-center text-white">
        <h1 className="text-4xl font-bold uppercase text-yellow-500 sm:text-5xl">
          Bienvenue dans mon univers 
        </h1>
        <p className="mt-6 text-lg leading-relaxed sm:text-xl">
          Je m'appelle Jean Mauvoisin, né en 1959. Passionné de photographie,
          j’ai eu la chance, après quarante ans de pratique en tant qu’amateur,
          de pouvoir m’y consacrer pleinement aujourd’hui. En septembre 2020,
          j’ai intégré l’école EFET Photographie de Paris, où j’ai appris à
          maîtriser de nouvelles techniques, ce qui m’a permis de continuer à me
          perfectionner dans l’Art photographique, tant numérique qu’argentique.
        </p>
        <p className="mt-4 text-lg leading-relaxed sm:text-xl">
          Depuis avril 2021, je suis auteur-photographe, un statut qui m’a
          ouvert de nouvelles perspectives. Mon orientation artistique se tourne
          principalement vers la photo de rue : scènes de vie, architecture, et
          tout ce qui reflète l’âme d’un lieu. J’aime me laisser guider par mes
          promenades régulières, que ce soit en ville, à la campagne ou au bord
          de la mer, pour aller à la rencontre de mes sources d’inspiration.
        </p>
        <p className="mt-4 text-lg leading-relaxed sm:text-xl">
          Au-delà de mon métier, je suis aussi formateur en photographie. J’ai à
          cœur de partager ma passion et de transmettre mon savoir-faire à ceux
          qui souhaitent maîtriser cet art fascinant. Ensemble, nous apprendrons
          à voir le monde sous un nouvel angle.
        </p>
        <p className="mt-6 text-lg font-semibold sm:text-xl">
          Installé en Charente-Maritime depuis 2022, je vis au cœur d’une région
          qui regorge de trésors photographiques, entre terre et mer. Chaque
          jour ici est une nouvelle invitation à explorer et capturer la beauté
          du monde qui m’entoure.
        </p>
      </section>

      {/* Section Image en dessous */}
      <div className="relative mx-auto mt-10 max-w-4xl">
        <Image
          src="/jeanPose.jpg"
          alt="Jean sur la plage"
          width="1200"
          height="800"
          className="rounded-lg shadow-lg"
        />
        <p className="mt-4 text-center text-lg italic text-gray-400">
          &quot;Chaque instant est une opportunité de capturer
          l&apos;éphémère.&quot;
        </p>
      </div>
    </div>
  );
}
