'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      title: 'Clean-up Drive',
      image: '/DSC_0038.jpg',
    },
    {
      id: 2,
      title: 'Tree Plantation',
      image: '/DSC_0038.jpg',
    },
    {
      id: 3,
      title: 'Awareness Campaign',
      image: '/DSC_0038.jpg',
    },
    {
      id: 4,
      title: 'Awareness Campaign',
      image: '/DSC_0038.jpg',
    },
    {
      id: 5,
      title: 'Awareness Campaign',
      image: '/DSC_0038.jpg',
    },
    {
      id: 6,
      title: 'Awareness Campaign',
      image: '/DSC_0038.jpg',
    },
    {
      id: 7,
      title: 'Awareness Campaign',
      image: '/DSC_0038.jpg',
    },
    {
      id: 8,
      title: 'Awareness Campaign',
      image: '/DSC_0038.jpg',
    },
    // Add more gallery images here
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <Link href={`/gallery/${image.id}`}>
              <div
                key={image.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <Image
                  src={image.image}
                  alt={image.title}
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    {image.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
