'use client';
import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-green-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-500 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <Link className="flex flex-shrink-0 items-center" href="/">
              <Image
                src="/gurans.png"
                alt="Tikapur"
                width={80}
                height={0}
                priority={true}
              />

              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Green Tikapur, Clean Tikapur
              </span>
            </Link>
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className="hidden md:ml-6 md:block mx-auto my-auto">
              <div className="flex space-x-2">
                <Link
                  href="/"
                  className="text-white  hover:bg-gray-600 text-2xl hover:text-white rounded-md px-2 py-2 font-bold"
                >
                  गृहपृष्ठ
                </Link>

                <Link
                  href="/about-us"
                  className="text-white hover:bg-gray-600 text-2xl hover:text-white rounded-md px-3 py-2 font-bold"
                >
                  हाम्रोबारे
                </Link>

                <Link
                  href="/aim"
                  className="text-white hover:bg-gray-600 text-2xl hover:text-white rounded-md px-3 py-2 font-bold"
                >
                  उद्देश्य
                </Link>

                <Link
                  href="/tree-plantation"
                  className="text-white hover:bg-gray-600 text-2xl hover:text-white rounded-md px-3 py-2 font-bold"
                >
                  बृक्षारोपण
                </Link>

                <Link
                  href="/quote"
                  className="text-white hover:bg-gray-600 text-2xl hover:text-white rounded-md px-3 py-2 font-bold"
                >
                  भनाईहरु
                </Link>

                <Link
                  href="/gallery"
                  className="text-white hover:bg-gray-600 text-2xl hover:text-white rounded-md px-3 py-2 font-bold"
                >
                  ग्यालेरी
                </Link>

                <Link
                  href="/prev-experience"
                  className="text-white hover:bg-gray-600 text-2xl hover:text-white rounded-md px-3 py-2 font-bold"
                >
                  अनुभव
                </Link>

                <Link
                  href="/contact-us"
                  className="
                   text-white p-5  hover:bg-gray-600 text-2xl hover:text-white rounded-md px-3 py-2 font-bold"
                >
                  सम्पर्क
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMobileMenuOpen && (
        <div id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className="text-white  hover:bg-gray-500 block rounded-md px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              गृहपृष्ठ
            </Link>
            <Link
              href="/about-us"
              className="
              text-white hover:bg-gray-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              हाम्रोबारे
            </Link>

            <Link
              href="/aim"
              className="text-white hover:bg-gray-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              उद्देश्य
            </Link>

            <Link
              href="/tree-plantation"
              className="text-white hover:bg-gray-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              बृक्षारोपण
            </Link>

            <Link
              href="/quote"
              className="text-white hover:bg-gray-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              भनाईहरु
            </Link>

            <Link
              href="/gallery"
              className="text-white hover:bg-gray-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              ग्यालेरी
            </Link>

            <Link
              href="/prev-experience"
              className="text-white hover:bg-gray-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              अनुभव
            </Link>

            <Link
              href="/contact-us"
              className="text-white hover:bg-gray-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              सम्पर्क
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
