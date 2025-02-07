'use client';

import { createClient } from '@supabase/supabase-js';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Initialisation de Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Charger le carrousel dynamiquement pour optimiser les performances
const Carousel = dynamic(() => import('react-slick'), { ssr: false });

// Liste des albums et leur dossier correspondant
const albums = [
  { id: 0, title: 'Tous', folder: null },
  { id: 1, title: 'Architecture', folder: 'architecture' },
  { id: 2, title: 'Graphisme', folder: 'graphisme' },
  { id: 3, title: 'Minimalisme', folder: 'minimalisme' },
  { id: 4, title: 'Nature', folder: 'nature' },
  { id: 5, title: 'Packshot', folder: 'packshot' },
  { id: 6, title: 'Paysage', folder: 'paysage' },
  { id: 7, title: 'Portrait', folder: 'portrait' },
  { id: 8, title: 'Reportage', folder: 'reportage' },
  { id: 9, title: 'Street Photography', folder: 'street-photography' },
  { id: 10, title: 'Texture', folder: 'texture' },
  { id: 11, title: 'Zen', folder: 'zen' },
];

const GalleryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(albums[0]); // "Tous" par défaut
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [gallery, setGallery] = useState({});
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      let imagesByAlbum = {};

      for (const album of albums.slice(1)) {
        const { data, error } = await supabase.storage
          .from('galerie-images')
          .list(album.folder, { limit: 100 });

        if (error) {
          console.error(
            `Erreur lors de la récupération de ${album.title}:`,
            error
          );
        } else {
          imagesByAlbum[album.title] = data.map((file) => ({
            src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/galerie-images/${album.folder}/${file.name}`,
            album: album.title,
          }));
        }
      }

      setGallery(imagesByAlbum);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (currentAlbum.folder === null) {
      // "Tous" → afficher toutes les images
      const allImages = Object.values(gallery).flat();
      setFilteredImages(allImages);
    } else {
      // Filtrage par album
      setFilteredImages(gallery[currentAlbum.title] || []);
    }
  }, [currentAlbum, gallery]);

  const openModal = (album, index) => {
    setCurrentAlbum(album);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white">
      <h1 className="mb-8 text-center text-3xl font-bold">Galerie Photos</h1>

      {/* Filtres */}
      <div className="mb-8 flex justify-center">
        {/* Boutons sur grand écran */}
        <div className="hidden space-x-4 md:flex">
          {albums.map((album) => (
            <button
              key={album.id}
              className={`rounded-lg px-4 py-2 transition-colors ${
                currentAlbum.id === album.id
                  ? 'bg-yellow-400 font-semibold text-black'
                  : 'bg-black hover:bg-gray-600'
              }`}
              onClick={() => setCurrentAlbum(album)}
            >
              {album.title}
            </button>
          ))}
        </div>

        {/* Liste déroulante sur mobile */}
        <select
          className="block rounded-lg bg-gray-700 p-2 text-white md:hidden"
          onChange={(e) => {
            const selectedAlbum = albums.find(
              (album) => album.title === e.target.value
            );
            setCurrentAlbum(selectedAlbum);
          }}
          value={currentAlbum.title}
        >
          {albums.map((album) => (
            <option key={album.id} value={album.title}>
              {album.title}
            </option>
          ))}
        </select>
      </div>

      {/* Affichage des images en grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openModal(currentAlbum, index)}
          >
            <Image
              src={image.src}
              alt={`${image.album} - Image ${index}`}
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modale en plein écran */}
      {isModalOpen && filteredImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeModal}
        >
          <div
            className="relative flex max-h-[75vh] w-full max-w-4xl flex-col items-center overflow-hidden rounded-lg bg-gray-900 md:h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton de fermeture */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full bg-gray-700 p-2 text-white hover:bg-gray-600"
            >
              ✕
            </button>

            {/* Image agrandie */}
            <div className="flex h-[calc(100vh-64px)] w-full items-center justify-center md:h-auto">
              <Image
                src={filteredImages[currentImageIndex].src}
                alt={`Image ${currentImageIndex}`}
                width={800}
                height={600}
                className="max-h-[75vh] max-w-full object-contain"
              />
            </div>

            {/* Navigation avec les flèches */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 p-4 text-white hover:bg-gray-700"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 p-4 text-white hover:bg-gray-700"
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
