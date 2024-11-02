import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="min-h-screen relative"
    style={{
    margin: '1rem',
    }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/landinghero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)',
          borderRadius: '24px',
          overflow: 'hidden',
        }}

      />
      
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <Link href="/" className="text-white text-2xl font-semibold">
        <div className="flex items-center">
        <Image
  src="/logo.png"
  alt="Logo"
  width={30} // Ensure this is a number, not a string
  height={20} // Ensure this is a number, not a string
/>
<span className="ml-4 text">My perfect PG</span>
</div>
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-white hover:text-gray-200 transition">
            Home
          </Link>
          <Link href="/" className="text-white hover:text-gray-200 transition">
            About
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 h-[calc(100vh-80px)]">
        <h1 className="text-4xl md:text-6xl text-white font-light text-center tracking-wider mb-6">
          YOUR PERFECT PG STAY STARTS HERE
        </h1>
        
        <p className="text-white text-center mb-12 max-w-2xl">
          Book today for comfort, convenience, and community, all in prime locations with top amenities!
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search PG, Location..."
              className="w-full px-6 py-3 rounded-full bg-white/20 backdrop-blur-md text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white/50"
            />
          </div>
          <button className="px-8 py-3 bg-white rounded-full text-blue-600 font-medium hover:bg-blue-50 transition-colors" aria-label="Search">
            Search
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
