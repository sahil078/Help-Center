import React from 'react';

const Header = () => {
    return (
        <header className="bg-black text-white p-4 flex justify-between items-center">
            <div className="font-bold text-2xl">Abstract | Help Center</div>
            <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600">
                Submit a request
            </button>
        </header>
    );
};

export default Header;
