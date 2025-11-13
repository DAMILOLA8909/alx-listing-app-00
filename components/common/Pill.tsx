// components/common/Pill.tsx
import { PillProps } from '../../interfaces';

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
        isActive 
          ? 'bg-black text-white border-black' 
          : 'bg-white text-gray-800 border-gray-300 hover:border-gray-800'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;