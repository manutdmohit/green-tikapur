'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import OpenSpace from '@/components/OpenSpace';
import Award from '@/components/Award';
import Team from '@/components/Team';

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
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          {' '}
          <Image
            src="/DSC_0038.jpg"
            alt="About Us"
            width={600}
            height={300}
            className="m-auto mt-8"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            src="/DSC_0010.JPG"
            alt="About Us"
            width={600}
            height={300}
            className="m-auto mt-8"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            src="/DSC_2612.JPG"
            alt="About Us"
            width={600}
            height={300}
            className="m-auto mt-8"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            src="/IMG_0007_1.JPG"
            alt="About Us"
            width={600}
            height={300}
            className="m-auto mt-8"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            src="/Picture381.jpg"
            alt="About Us"
            width={600}
            height={300}
            className="m-auto mt-8"
            objectFit="cover"
          />
        </SwiperSlide>
      </Swiper>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-green-800 mb-6">
              हाम्रोबारे
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              कैलाली जिल्ला टीकापुर न.पा. स्थित गठित यस श्री खड्ग बहादुर सिहं
              स्मृति प्रतिष्ठान बिगतका केही वर्षहरु देखि शुरुवात भई कार्य आरम्भ
              भई आएको भएता पनि लिखित रुपमा यो संस्था २०६५ सालमा जिल्ला प्रशासन
              कार्यालय धनगढीमा दर्ता भई यस क्षेत्रको सामाजिक, सामुदायिक चेतना
              स्तर बृद्धिकोलागी परिरहेको एक बिशुद्ध गैर सरकारी संस्था हो ।
            </p>
            <p className="text-lg text-gray-700 mb-8">
              सफा टीकापुर, हरियाली टीकापुर एक सफा र हरियाली टीकापुर सहर बनाउन
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
              href="/contact-us"
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
              src="/DSC_0010.JPG"
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
              हाम्रो लक्ष्य भनेको सफा र हरियाली टीकापुर सहर बनाउने हो चेतना
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

      {/* Team Members Section */}
      <Team />

      {/* Awards */}
      <Award />

      {/* open space */}
      <OpenSpace />
    </div>
  );
};

export default AboutPage;
