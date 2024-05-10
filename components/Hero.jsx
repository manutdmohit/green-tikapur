import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen px-4 py-8 bg-gray-100">
      <div className="md:w-1/2 md:order-1 mb-8 md:mb-0">
        <Image
          src="/tkplogo.jpg"
          alt="Clean Tikapur, Green Tikapur"
          className="w-full h-auto rounded-lg shadow-lg"
          width={0}
          height={0}
          sizes="100vh"
          priority={true}
        />
      </div>
      <div className="md:w-1/2 md:order-0">
        <Link className="flex flex-shrink-0 items-center" href="/">
          <Image
            src="/logo.png"
            alt="Tikapur"
            width={150}
            height={0}
            priority={true}
            className="m-auto"
          />
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 ">
          Clean Tikapur, Green Tikapur{' '}
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
  );
};

export default HeroSection;
