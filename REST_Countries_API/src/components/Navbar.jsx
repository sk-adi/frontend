import React from 'react';

function Navbar() {
    return (
        <div className="bg-white shadow-md py-4 px-6">
            <nav className="flex justify-between items-center">
                <div className="text-xl font-bold text-gray-900">Where in the World?</div>
                <div className="text-gray-700 cursor-pointer hover:text-gray-900">Dark Mode</div>
            </nav>
        </div>
    );
}

export default Navbar;
