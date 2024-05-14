'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl text-center font-bold text-green-800  mt-10">
        श्री खड्ग बहादुर सिहं स्मृति प्रतिष्ठान
      </h1>

      <section className="flex flex-col md:flex-row items-center justify-between h-screen px-4 py-8 bg-gray-50">
        <div className="md:w-1/2 md:order-1 mb-8 md:mb-0 hidden md:block">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper mt-8"
          >
            <SwiperSlide>
              {' '}
              <Image
                src="/DSC_0038.jpg"
                alt="About Us"
                width={500}
                height={300}
                className="m-auto "
                objectFit="cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <Image
                src="/DSC_0038.jpg"
                alt="About Us"
                width={500}
                height={300}
                className="m-auto "
              />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <Image
                src="/DSC_0038.jpg"
                alt="About Us"
                width={500}
                height={300}
                className="m-auto "
              />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <Image
                src="/DSC_0038.jpg"
                alt="About Us"
                width={500}
                height={300}
                className="m-auto "
              />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <Image
                src="/DSC_0038.jpg"
                alt="About Us"
                width={500}
                height={300}
                className="m-auto "
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="md:w-1/2 md:order-1 mb-8 md:mb-0 md:hidden">
          <Image
            src="/DSC_0038.jpg"
            alt="About Us"
            width={900}
            height={600}
            className="m-auto"
          />
        </div>
        <div className="md:w-1.5/2 md:order-0">
          <h1 className="text-4xl md:text-4xl text-center font-bold text-green-800 mb-4">
            Green Tikapur, Clean Tikapur{' '}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 font-semibold">
            सफा र हरियाली टीकापुर शहर बनाउनको लागि हाम्रो मिशनमा सामेल हुनुहोस्।
            सँगै, हामी फरक बनाउन सक्छौं।
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md">
            संलग्न हुनुहोस्
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
