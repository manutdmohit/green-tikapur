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
        <div className="md:w-1/2 md:order-1 mb-8 md:mb-0">
          {/* <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel> */}
          {/* <Image
            src="/tkplogo.jpg"
            alt="Clean Tikapur, Green Tikapur"
            className="w-full h-auto rounded-lg shadow-lg"
            width={0}
            height={0}
            sizes="100vh"
            priority={true}
          /> */}
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
        <div className="md:w-1.5/2 md:order-0">
          <Link href="/" passHref>
            {/* <Image src="/logo.png" alt="Tikapur" width={150} height={0} priority={true} className="m-auto "
          objectFit='cover'
          ' /> */}
          </Link>
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
