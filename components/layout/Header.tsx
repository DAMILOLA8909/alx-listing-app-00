// components/layout/Header.tsx
import { useState } from 'react';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const accommodationTypes = ['Rooms', 'Mansion', 'Countryside', 'Beachfront', 'Luxury', 'Mountain', 'City', 'Skiing'];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-red-500">airbnb</div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
              <input
                type="text"
                placeholder="Search destinations"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none"
              />
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium hover:bg-gray-100 px-4 py-2 rounded-full">
              Become a Host
            </button>
            <button className="flex items-center space-x-2 border border-gray-300 rounded-full p-2 hover:shadow-md transition-shadow">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Accommodation Types */}
        <div className="flex space-x-8 py-4 overflow-x-auto">
          {accommodationTypes.map((type) => (
            <button
              key={type}
              className="flex flex-col items-center space-y-1 whitespace-nowrap hover:text-gray-600 transition-colors"
            >
              <div className="w-6 h-6">
                {/* Placeholder for icons */}
                <div className="w-full h-full bg-gray-200 rounded-full"></div>
              </div>
              <span className="text-xs font-medium">{type}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;