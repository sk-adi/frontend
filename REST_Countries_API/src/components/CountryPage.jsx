import React from "react";

function CountryPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back Button */}
      <div className="mb-6">
        <button className="bg-white shadow-md px-6 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition">
          &#8592; Back
        </button>
      </div>

      {/* Country Details */}
      <div className="grid md:grid-cols-2 gap-10 items-center bg-white shadow-md p-6 rounded-lg">
        {/* Left Side: Flag */}
        <div className="w-full">
          <img
            src="/"
            alt="Country Flag"
            className="w-full h-64 object-cover rounded-md shadow-md"
          />
        </div>

        {/* Right Side: Details */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Country Name</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <p><strong>Native Name:</strong> Example</p>
              <p><strong>Population:</strong> 10,000,000</p>
              <p><strong>Region:</strong> Europe</p>
              <p><strong>Sub Region:</strong> Western Europe</p>
              <p><strong>Capital:</strong> Paris</p>
            </div>

            {/* Right Column */}
            <div>
              <p><strong>Top-Level Domain:</strong> .fr</p>
              <p><strong>Currencies:</strong> Euro (EUR)</p>
              <p><strong>Languages:</strong> French</p>
            </div>
          </div>

          {/* Border Countries */}
          <div className="mt-6">
            <h4 className="font-semibold">Border Countries:</h4>
            <div className="flex gap-2 mt-2 flex-wrap">
              <a href="/" className="bg-gray-200 px-3 py-1 rounded-md shadow-md hover:bg-gray-300 transition">
                France
              </a>
              <a href="/" className="bg-gray-200 px-3 py-1 rounded-md shadow-md hover:bg-gray-300 transition">
                Germany
              </a>
              <a href="/" className="bg-gray-200 px-3 py-1 rounded-md shadow-md hover:bg-gray-300 transition">
                Netherlands
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
