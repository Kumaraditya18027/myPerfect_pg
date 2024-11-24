import Navbar from '@/components/Navbar2';
import React, { useState } from 'react';

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-500">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-500">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const PGListing = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const listings = [
    {
      id: 1,
      image: "/pgimage.png",
      name: "Bla Bla PG",
      location: "Kolkata",
      amount: 5000,
      assignMember: "Rajgopal Kumar",
      phoneNumber: "+91 7783061661",
      amenities: ["WiFi", "AC", "Laundry", "Food"]
    },
    // Add more listings as needed
  ];

  return (
    <>
      <div className="mb-16"><Navbar></Navbar></div>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8 flex-col sm:flex-row">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Find Your Perfect PG
              </h1>
              <p className="text-gray-600 mt-2 text-lg sm:text-xl">Discover comfortable and affordable PG accommodations</p>
            </div>
            
            <div className="flex gap-4 mt-4 sm:mt-0">
              <select className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                <option>Sort by Price</option>
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
              <select className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                <option>Filter Location</option>
                <option>Kolkata</option>
                <option>Other Cities</option>
              </select>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg bg-opacity-90">
            {/* Table Header */}
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="text-sm font-semibold text-gray-600">Image</div>
              <div className="text-sm font-semibold text-gray-600">PG Name</div>
              <div className="text-sm font-semibold text-gray-600">Location</div>
              <div className="text-sm font-semibold text-gray-600">Amount</div>
              <div className="text-sm font-semibold text-gray-600">Assign member</div>
              <div className="text-sm font-semibold text-gray-600">Contact</div>
            </div>

            {/* Listings */}
            <div className="divide-y divide-gray-100">
              {listings.map((listing) => (
                <div
                  key={listing.id}
                  className="grid grid-cols-1 sm:grid-cols-6 gap-4 p-6 items-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 cursor-pointer"
                  onMouseEnter={() => setHoveredId(listing.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative group">
                    <img
                      src={listing.image}
                      alt={listing.name}
                      className="w-16 h-16 rounded-2xl object-cover transform transition-transform group-hover:scale-105 shadow-lg"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{listing.name}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {listing.amenities.join(" · ")}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <LocationIcon />
                    <span className="text-gray-700">{listing.location}</span>
                  </div>
                  <div className="font-medium text-gray-900">
                    <span className="text-sm text-gray-500">₹</span>
                    {listing.amount.toLocaleString()}
                    <span className="text-sm text-gray-500">/month</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{listing.assignMember}</div>
                    <div className="text-sm text-gray-500">Property Manager</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 hover:bg-green-100 transition-colors">
                      <PhoneIcon />
                      <span className="text-green-700">{listing.phoneNumber}</span>
                    </div>
                    <div className="transform transition-transform hover:translate-x-1">
                      <ChevronRightIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-8 text-center text-gray-500">
            <p>Can&apos;t find what you&apos;re looking for? <button className="text-blue-500 hover:underline">Contact Support</button></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PGListing;
