import React from 'react';

const Card = ({ title, description }) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center w-72">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default Card;
