import Link from 'next/link';
import { FaCommentDots } from 'react-icons/fa';

const number = '+9779848440281';

const CallButton = () => {
  return (
    <Link href={`tel:${number}`} className="fixed bottom-5 right-5">
      <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg transition-transform transform hover:scale-110 animate-pulse">
        <FaCommentDots className="text-white text-3xl" />
      </div>
    </Link>
  );
};

export default CallButton;
