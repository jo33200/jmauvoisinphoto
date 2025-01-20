import Image from "next/image";

export default function Home() {
  return (
   <body>
    <div className="relative mt-28 sm:mt-20 md:mt-0  min-h-screen py-2 bg-black">
  <div className="relative w-full">
    <Image
      src="/jeanMamanSanka.jpg"
      alt="Jean"
      width="1900"
      height="1000"
      className="shadow-inner object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black mix-blend-multiply"></div>
  </div>
</div>
    </body>
  );
}
