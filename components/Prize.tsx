import Image from 'next/image';
const PrizeSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-100 px-4 py-8 bg-green-700">
      <div className="md:w-1/2 md:order-1 mb-8 md:mb-0">
        <Image
          src="/7G0A9180.png"
          alt="About Us"
          width={900}
          height={600}
          className="m-auto"
        />
      </div>
      <div className="md:w-1/2 md:order-0">
        <p className="text-xl md:text-2xl text-white mb-8">
          ग्रीन टिकापुर, क्लीन टिकापुरका अभियान मा अतुलनिय योगदान पुराए बापत बन
          तथा वातावरण मन्त्रालयले मुल्लाङ्कन गरि यश प्रतिष्ठान का अध्यक्ष श्री
          लाल बहादुर साउदलाई राष्ट्रपतिबाट २०७४ को पर्यावरण पुरस्कार प्रधान
          गरियेको अवस्था ।
        </p>
      </div>
    </section>
  );
};

export default PrizeSection;
