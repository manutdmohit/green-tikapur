'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Carousel } from 'flowbite-react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AboutPage = () => {
  return (
    <div className="bg-gray-100">
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
            width={900}
            height={600}
            className="m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            src="/DSC_0038.jpg"
            alt="About Us"
            width={900}
            height={600}
            className="m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            src="/DSC_0038.jpg"
            alt="About Us"
            width={900}
            height={600}
            className="m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            src="/DSC_0038.jpg"
            alt="About Us"
            width={900}
            height={600}
            className="m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            src="/DSC_0038.jpg"
            alt="About Us"
            width={900}
            height={600}
            className="m-auto"
          />
        </SwiperSlide>
      </Swiper>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-green-800 mb-6">About Us</h1>
            <p className="text-lg text-gray-700 mb-8">
              सफा टिकापुर, हरियाली टिकापुर एक सफा र हरियाली टिकापुर सहर बनाउन
              समर्पित समुदाय-संचालित पहल हो। हाम्रो मिशन भनेको चेतना जगाउनु,
              दिगो अभ्यासहरू प्रवर्द्धन गर्नु, र नागरिकहरूलाई स्वस्थ र अधिक
              पर्यावरण-मैत्री वातावरण तर्फ कदम चाल्न प्रेरित गर्नु हो।
            </p>
            <p className="text-lg text-gray-700 mb-8">
              हामी विश्वास गर्छौं कि हरेक साना कदम गणना गर्दछ, र सँगै काम गरेर,
              हामीले हाम्रो प्रियजनको कल्याणमा महत्त्वपूर्ण प्रभाव पार्न सक्छौं
              शहर। हरियाली भविष्यतर्फको यो यात्रामा हामीसँग सामेल हुनुहोस्।
            </p>
            <Link
              href="/get-involved"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              संलग्न हुनुहोस्
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/DSC_0038.jpg"
              alt="About Us"
              layout="responsive"
              objectFit="cover"
              width={800}
              height={100}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <Image
              src="/DSC_0038.jpg"
              alt="Our Mission"
              layout="responsive"
              objectFit="cover"
              width={800}
              height={100}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              हाम्रो मिशन
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              हाम्रो लक्ष्य भनेको सफा र हरियाली टिकापुर सहर बनाउने हो चेतना
              जगाउने, दिगो अभ्यासहरू प्रवर्द्धन गर्ने, र प्रेरणादायी नागरिकहरू
              स्वस्थ र अधिक पर्यावरण मैत्री तर्फ कार्य गर्न वातावरण।
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
              <li>
                सामुदायिक सफाई ड्राइभहरू र रिसाइक्लिंग पहलहरू व्यवस्थित
                गर्नुहोस्।
              </li>
              <li>वृक्षारोपण र हरियाली विकास प्रवर्द्धन गर्नुहोस्।</li>
              <li>
                फोहोर कम गर्न र अपनाउन नागरिकहरूलाई शिक्षित र सशक्त बनाउनुहोस्
                पर्यावरण अनुकूल बानीहरू।
              </li>
              <li>
                स्थानीय निकाय र सरोकारवालासँग सहकार्य गर्ने प्रभावकारी
                कार्यान्वयन।
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;