import React from 'react';
import Card from './Card';

const CardList = ({ cards, searchQuery }) => {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {cards
                .filter(card => card.title.toLowerCase().includes(searchQuery.toLowerCase()))
                .map(card => (
                    <Card key={card.id} title={card.title} description={card.description} />
                ))}
        </div>
    );
};

export default CardList;
