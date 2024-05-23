'use client';

import Image from 'next/image';

import { Gallery, Item } from 'react-photoswipe-gallery';

const images: string[] = [
  '/GalleryImages/DSC_0176.JPG',
  '/GalleryImages/DSC_0174.JPG',
  '/GalleryImages/20180225_091735.jpg',
  '/GalleryImages/20180225_094547.jpg',
  '/GalleryImages/20180225_094602.jpg',
  '/GalleryImages/20180225_094655.jpg',
  '/GalleryImages/DSC_0029.JPG',
  '/GalleryImages/DSC_0040.jpg',
  '/GalleryImages/DSC_2616.JPG',
  '/GalleryImages/IMG_3106.JPG',
  '/GalleryImages/IMG_3127.JPG',
  '/GalleryImages/IMG_3128.JPG',
  '/GalleryImages/IMG_3143.JPG',
  '/GalleryImages/IMG_3145.JPG',
  '/GalleryImages/Picture 382.jpg',
  '/GalleryImages/Picture 384.jpg',
  '/GalleryImages/Picture 394.jpg',
  '/GalleryImages/Picture 401.jpg',
  '/GalleryImages/Picture 403.jpg',
  '/GalleryImages/Picture 405.jpg',
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
