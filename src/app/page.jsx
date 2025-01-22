import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative mt-28 min-h-screen bg-black py-2 sm:mt-20 md:mt-0">
      <div className="relative w-full">
        <Image
          src="/jeanMamanSanka.jpg"
          alt="Jean"
          width="1900"
          height="1000"
          className="object-cover shadow-inner"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black mix-blend-multiply"></div>
      </div>
    </div>
  );
}
