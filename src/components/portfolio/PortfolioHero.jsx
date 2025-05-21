import React from 'react';

export default function PortfolioHero() {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="text-primary-500">Our Work</span> That Delivers Results
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl">
            We help leading brands create standout digital experiences—from concept to execution to measurable results.
          </p>
        </div>
      </div>
    </div>
  );
} 