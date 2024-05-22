'use client';

import Image from 'next/image';

import { Gallery, Item } from 'react-photoswipe-gallery';

const images = [
  '/DSC_0038.jpg',
  '/DSC_0010.JPG',
  '/DSC_2612.JPG',
  '/IMG_0007_1.JPG',
  '/20180225_094817.jpg',
  '/20180216_082125.jpg',
  '/Picture381.jpg',
  '/DSC_0050.jpg',
];

const GalleryPage = () => {
  return (
    <Gallery>
      <section className="bg-blue-50 p-4 mt-10 mb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index}>
                <Item
                  original={image}
                  thumbnail={image}
                  width="1000"
                  height="600"
                >
                  {({ ref, open }) => (
                    <Image
                      ref={ref}
                      onClick={open}
                      src={image}
                      alt=""
                      className="object-cover w-[100vw] md:w-[25vw] h-full rounded-xl"
                      width={0}
                      height={0}
                      sizes="50vw"
                      priority={true}
                      objectFit="cover"
                    />
                  )}
                </Item>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Gallery>
  );
};

export default GalleryPage;
