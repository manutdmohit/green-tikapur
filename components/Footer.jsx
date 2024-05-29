import Link from 'next/link';

import { FaFacebook, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About</h3>
            <p className="text-gray-400">
              हाम्रो मिशन भनेको सचेत र हरियाली टीकापुर सहर निर्माण गर्नु हो,
              चेतना जगाएर दिगोपनतर्फ ठोस कदम चाल्दै।
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-white"
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-white"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <ul>
              <li className="mb-2">
                <Link
                  href="https://www.facebook.com/profile.php?id=100067491594990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaFacebook className="inline mr-2" />
                  Facebook
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="tel:9848440281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaPhone className="inline mr-2" /> 9848440281
                </Link>
              </li>
              <li>
                <Link
                  href="mailto: saudlalbahadur2017@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <MdEmail className="inline mr-2" />
                  saudlalbahadur2017@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Green Tikapur, Clean Tikapur. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
