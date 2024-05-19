'use client';

import Image from 'next/image';
import Link from 'next/link';

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
    <section className="flex flex-col md:flex-row items-center justify-between h-100 px-4 py-8 bg-green-700 ">
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
            श्री खड्ग बहादुर सिहं स्मृति प्रतिष्ठान
            <FaQuoteRight
              className="ml-2 inline-block mb-5"
              fontSize={20}
              color="yellow"
            />
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce={true}>
          <h1 className="text-white text-4xl md:text-4xl text-center font-bold mb-4">
            Green Tikapur, Clean Tikapur{' '}
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            कैलाली जिल्ला टीकापुर न.पा. स्थित गठित यस श्री खड्ग बहादुर सिहं
            स्मृति प्रतिष्ठान बिगतका केही वर्षहरु देखि शुरुवात भई कार्य आरम्भ भई
            आएको भएता पनि लिखित रुपमा यो संस्था २०६५ सालमा जिल्ला प्रशासन
            कार्यालय धनगढीमा दर्ता भई यस क्षेत्रको सामाजिक, सामुदायिक चेतना स्तर
            बृद्धिकोलागी परिरहेको एक बिशुद्ध गैर सरकारी संस्था हो ।
          </p>

          <Link href="/contact-us">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md">
              संलग्न हुनुहोस्
            </button>
          </Link>
        </Fade>
      </div>
    </section>
  );
};

export default HeroSection;
