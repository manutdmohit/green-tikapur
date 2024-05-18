'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Fade } from 'react-awesome-reveal';

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen px-4 py-8 bg-green-700">
      {' '}
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
        <Fade direction="down" triggerOnce={true}>
          <h1 className="text-4xl md:text-4xl text-center font-bold text-white mb-5">
            <FaQuoteLeft
              className="inline-block mb-5"
              fontSize={20}
              color="yellow"
            />{' '}
            श्री खड्ग बहादुर सिहं स्मृति प्रतिष्ठान{' '}
            <FaQuoteRight
              className="inline-block mb-5"
              fontSize={20}
              color="yellow"
            />
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce={true}>
          <h1 className="text-white text-4xl md:text-4xl text-center font-bold mb-4">
            Green Tikapur, Clean Tikapur{' '}
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 ">
            सफा र हरियाली टीकापुर शहर बनाउनको लागि हाम्रो मिशनमा सामेल हुनुहोस्।
            सँगै, हामी फरक बनाउन सक्छौं।
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md">
            संलग्न हुनुहोस्
          </button>
        </Fade>
      </div>
    </section>
  );
};

export default HeroSection;
