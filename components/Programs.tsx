'use client';
import React from 'react';
import Image from 'next/image';

import { Fade } from 'react-awesome-reveal';

const ProgramSection = () => {
  const programImages = [
    {
      id: 1,
      title: 'सातौं वृक्षारोपण कार्यक्रम(२०७१/०४/०६ - २०७१/०४/०७)',
      image: '/DSC_0038.jpg',
    },
    {
      id: 2,
      title: 'वृक्षारोपण कार्यक्रम(२०७५/०३/३१)',
      image: '/DSC_0010.JPG',
    },
    {
      id: 3,
      title: 'डस्टबिन उद्घाटन',
      image: '/DSC_2612.JPG',
    },
    {
      id: 4,
      title: 'वृक्षारोपण कार्यक्रम(२०७५/०५/०१)',
      image: '/IMG_0007_1.JPG',
    },
    {
      id: 5,
      title: 'वृक्षारोपण कार्यक्रम(२०७४/११/१३)',
      image: '/20180225_094817.jpg',
    },
    {
      id: 6,
      title: 'रूख संरक्षण',
      image: '/20180216_082125.jpg',
    },
    {
      id: 7,
      title: 'वृक्षारोपण कार्यक्रम(२०७५/०५/०१)',
      image: '/Picture381.jpg',
    },
    {
      id: 8,
      title: 'सातौं वृक्षारोपण कार्यक्रम(२०७१/०४/०६ - २०७१/०४/०७)',
      image: '/DSC_0050.jpg',
    },
  ];

  return (
    <section className="bg-green-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
          विभिन्न कार्यक्रम
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {programImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
            >
              <Fade
                triggerOnce={true}
                direction="up"
                cascade={false}
                delay={(image.id - 1) * 200}
              >
                <div className="relative h-64">
                  <Image
                    src={image.image}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    {image.title}
                  </h3>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
