import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import CardList from './Components/CardList';
import Footer from './Components/Footer';

const App = () => {
    const [cards, setCards] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/cards')
            .then(response => response.json())
            .then(data => setCards(data));
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <CardList cards={cards} searchQuery={searchQuery} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
