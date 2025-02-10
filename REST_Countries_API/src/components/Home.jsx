import React from "react";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="🔍 Search by a country..."
            className="w-full p-3  bg-white  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mt-4 md:mt-0">
          <select className="p-3  bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
      
      {/* Main Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 w-full bg-gray-200">
            <img src="/" alt="Country" className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900">Country</h3>
            <p className="text-gray-700"><strong>Population:</strong> ---</p>
            <p className="text-gray-700"><strong>Region:</strong> ---</p>
            <p className="text-gray-700"><strong>Capital:</strong> ---</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
