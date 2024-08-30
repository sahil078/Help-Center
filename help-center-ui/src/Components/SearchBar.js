import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="text-center my-6">
            <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-1/2 p-3 text-lg border border-gray-300 rounded-lg"
            />
        </div>
    );
};

export default SearchBar;
