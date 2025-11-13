// pages/index.tsx
import { useState } from 'react';
import Card from '../components/common/Card';
import { PROPERTYLISTINGSAMPLE } from '../constants';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All', 
    'Top Villa', 
    'Free Reschedule', 
    'Book Now, Pay later', 
    'Self Checkin', 
    'Instant Book'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      

      <section className="relative rounded-3xl mx-4 my-6 min-h-[400px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/assets/Image 1.png')` }} />
  
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-30" />
  
          {/* Centered Content */}
          <div className="relative z-10 text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find your favorite place here!
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              The best prices for over 2 million properties worldwide
            </p>
          </div>
      </section>

      {/* Filter and Sort Section */}
      <section className="border-t border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-800 border border-gray-300 hover:border-gray-800'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Sort and Filter Buttons */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium hover:border-gray-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium hover:border-gray-800 transition-colors">
                Sort by: Highest Price
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <Card key={index} {...property} />
          ))}
        </div>
      </section>
    </div>
  );
}