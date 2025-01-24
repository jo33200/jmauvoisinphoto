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
      <section className="relative z-10 mx-auto mt-10 max-w-4xl px-4 text-center text-white">
        <h1 className="text-4xl font-bold uppercase text-yellow-500 sm:text-5xl">
          Bienvenue dans mon univers photographique
        </h1>
        <p className="mt-6 text-lg leading-relaxed sm:text-xl">
          Je suis Jean Mauvoisin, photographe passionné et professionnel. Depuis
          des années, je vis ma vie à travers l’objectif, transformant les
          instants éphémères en souvenirs éternels. Pour moi, chaque cliché
          raconte une histoire, capte une émotion et sublime les détails souvent
          invisibles au premier regard.
        </p>
        <p className="mt-4 text-lg leading-relaxed sm:text-xl">
          Mon travail s’étend des portraits intimes aux vastes paysages, en
          passant par les événements qui marquent vos vies. J’aime explorer la
          lumière et les contrastes pour donner à chaque photo une identité
          unique et authentique.
        </p>
        <p className="mt-4 text-lg leading-relaxed sm:text-xl">
          Au-delà de mon métier, je suis aussi formateur en photographie. J’ai à
          cœur de partager ma passion et de transmettre mon savoir-faire à ceux
          qui souhaitent maîtriser cet art fascinant. Ensemble, nous apprendrons
          à voir le monde sous un nouvel angle.
        </p>
        <p className="mt-6 text-lg font-semibold text-yellow-500 sm:text-xl">
          Je vous invite à découvrir mon univers, où chaque image est une
          invitation à rêver, ressentir et se souvenir.
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
