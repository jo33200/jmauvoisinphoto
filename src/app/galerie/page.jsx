'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';

// Charger le carrousel dynamiquement pour améliorer les performances
const Carousel = dynamic(() => import('react-slick'), { ssr: false });

const albums = [
  { id: 1, title: 'Reportage', images: ['/cheval.jpg', '/mob.jpg'] },
  { id: 2, title: 'Portraits', images: ['/artisant.jpg', '/jeanPlage.jpg'] },
  { id: 3, title: 'Paysages', images: ['/banc.jpg', '/feu.jpg'] },
  { id: 4, title: 'Architecture', images: ['/pont.jpg', '/change.jpg'] },
  { id: 5, title: 'Photos de Rue', images: ['/table.jpg', '/port.jpg'] },
  { id: 6, title: "Tirages D'art", images: ['/noeud.jpg', '/piano.jpg'] },
];

const GalleryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (album, index) => {
    setCurrentAlbum(album);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentAlbum(null);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === currentAlbum.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentAlbum.images.length - 1 : prevIndex - 1
    );
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white">
      <h1 className="mb-8 text-center text-3xl font-bold">Galerie Photos</h1>

      <div className="space-y-10">
        {albums.map((album) => (
          <div key={album.id}>
            <h2 className="mb-4 text-2xl font-semibold">{album.title}</h2>
            <div className="relative">
              <Carousel {...carouselSettings}>
                {album.images.map((image, index) => (
                  <div
                    key={index}
                    className="cursor-pointer p-2"
                    onClick={() => openModal(album, index)}
                  >
                    <Image
                      src={image}
                      alt={`${album.title} - Image ${index + 1}`}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        ))}
      </div>

      {/* Modale */}
      {isModalOpen && currentAlbum && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeModal}
        >
          <div
            className="relative w-11/12 overflow-hidden rounded-lg bg-white md:w-3/4 lg:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-2 top-2 z-50 rounded-full bg-gray-200 p-2 text-black hover:bg-gray-300"
            >
              ✕
            </button>
            <div className="relative h-[400px]">
              <Image
                src={currentAlbum.images[currentImageIndex]}
                alt={`${currentAlbum.title} - Image agrandie`}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 z-50 translate-y-1/2 rounded-full bg-gray-800 p-2 text-white"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 z-50 translate-y-1/2 rounded-full bg-gray-800 p-2 text-white"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
