import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About</h3>
            <p className="text-gray-400">
              हाम्रो मिशन भनेको सचेत र हरियाली टिकापुर सहर निर्माण गर्नु हो,
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
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/team" className="text-gray-400 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
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
                  href="https://www.facebook.com/cleantikapurgreentikapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Facebook
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://twitter.com/cleantikapurgreentikapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/cleantikapurgreentikapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Clean Tikapur, Green Tikapur. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
