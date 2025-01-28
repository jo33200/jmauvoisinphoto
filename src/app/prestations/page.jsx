import React from 'react';

const prestations = [
  {
    title: 'Initiation à la photographie',
    description: 'Une introduction passionnante à la photographie pour adolescents et adultes.',
    price: '€50',
  },
  {
    title: 'Les Bases de la Photographie',
    description: 'Apprenez les bases essentielles pour capturer des images exceptionnelles.',
    price: '€80',
  },
  {
    title: 'Bases de la Composition de l’Image',
    description: 'Découvrez comment composer des images équilibrées et artistiques.',
    price: '€70',
  },
  {
    title: 'Lumière et Eclairage en photographie',
    description: 'Maîtrisez l’art de la lumière pour sublimer vos photos.',
    price: '€90',
  },
  {
    title: 'Réglage de Base de l’Appareil',
    description: 'Comprenez comment configurer correctement votre appareil photo.',
    price: '€40',
  },
  {
    title: 'Les différents styles photographiques',
    description: 'Explorez divers styles pour enrichir votre créativité.',
    price: '€100',
  },
  {
    title: 'Photo en studio',
    description: 'Apprenez les techniques avancées de photographie en studio.',
    price: '€120',
  },
  {
    title: 'La Postproduction (Lightroom, Photoshop, …)',
    description: 'Dominez les outils de retouche pour perfectionner vos photos.',
    price: '€150',
  },
];

const Card = ({ title, description, price }) => {
  return (
    <div className="flex flex-col justify-between lg:px-3 max-w-80 h-96  items-center bg-[#1A1515] drop-shadow-[1.5px_1.5px_1.5px_rgba(250,250,250,0.50)] border-[0.5px] border-gray-800 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-normal mb-2 text-center">{title}</h2>
      <div className="my-4 h-[1px] w-4/5 bg-gradient-to-r from-[#1A1515] via-white to-[#1A1515]"></div>
      <p className="text-gray-300 mb-4 text-center">{description}</p>
      <div className="my-4 h-[3px] w-4/5 bg-[#675151] shadow-inner shadow-black "></div>
      <p className="text-xl font-semibold">{price}</p>
    </div>
  );
};

const Prestations = () => {
  return (
    <div className="px-4 py-32 md:py-8 md:px-12 lg:px-24  min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white mb-10 md:mb-24">Mes Prestations</h1>
      <div className="sm:grid flex flex-col justify-center items-center sm:place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-12 lg:max-w-7xl mx-auto">
        {prestations.map((prestation, index) => (
          <Card
            key={index}
            title={prestation.title}
            description={prestation.description}
            price={prestation.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Prestations;
