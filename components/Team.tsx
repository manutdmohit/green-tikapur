import { FaUsers, FaUserTie } from 'react-icons/fa';

const Team = () => {
  const team = {
    अध्यक्ष: 'लाल बहादुर साउद',
    उपाध्याक्ष: 'दानबहादुर गिरी',
    कोषाध्यक्ष: 'दिलबहादुर ठकुल्ला',
    सदस्यहरू: [
      'देवीलाल घिमिरे',
      'भजन सिंह विक ',
      'कटक बहादुर थापा',
      'लक्ष्मी बम',
    ],
  };
  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
        <FaUsers className="inline-block mr-2" /> हाम्रो टीम
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(team).map(([role, name], index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
          >
            <FaUserTie className="text-5xl text-green-800 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{role}</h3>
            <p className="text-gray-700 text-center">
              {Array.isArray(name)
                ? name.map((n, i) => (
                    <span key={i}>
                      {n}
                      {i !== name.length - 1 ? ', ' : ''}
                    </span>
                  ))
                : name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
