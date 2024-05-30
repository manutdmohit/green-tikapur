import { FaAward } from 'react-icons/fa';
import Image from 'next/image';

const Award = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center">
            <FaAward className="mr-2" /> सम्मानित ब्यक्तित्वहरू
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            यस श्री खड्ग बहादुर सिहं स्मृती प्रतिष्ठान द्वारा विभिन्न पटक
            सम्पादन गरेका कार्यहरुमा योगदान गरे वापत सम्मानित ब्यक्तित्वहरु
            निम्नानुसार रहेका छन् ।
          </p>
          <ul className="list-decimal list-inside text-lg text-gray-700 mb-8 space-y-2">
            <li>
              श्री सरीता थापा रावल - ब्लक १५ योगदान रहेको गणपती गार्डेन निर्माण
              (नगर एक उद्यान अनेक कार्यक्रम)
            </li>
            <li>
              श्री टंक देवी थापा भण्डारी टीकापुर ९ ब्लक १६ आर्दश उद्यान निर्माण
              नगर एक उद्यान अनेक कार्यक्रम
            </li>
            <li>
              श्री मोतीसरा सांवद (खड्का) टीकापुर ९ ब्लक २४ तिनकुने गार्डेन नगर
              एक उद्यान अनेक कार्यक्रम
            </li>
            <li>
              श्री कल्पना आचार्य टीकापुर ९ ब्लक २५ रामारोसन गार्डेन नगर एक
              उद्यान अनेक कार्यक्रम
            </li>
            <li>
              श्री जानकी देवकोटा टीकापुर ९ ब्लक २४ अपी सैपाल गार्डेन नगर एक
              उद्यान अनेक कार्यक्रम
            </li>
            <li>
              श्री नवराज आचार्य टीकापुर ९ ब्लक २४ भवानी गार्डेन नगर एक उद्यान
              अनेक कार्यक्रम
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="/01_copy.jpg"
            alt="Award Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Award;
