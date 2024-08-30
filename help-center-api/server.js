const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Card = require('./models/Card');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/helpCenter')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.get('/ping', (req, res) => {
    res.send('Server is running');
});

// Create a new card
app.post('/cards', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newCard = new Card({ title, description });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all cards
app.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific card by title
app.get('/cards/:title', async (req, res) => {
    try {
        const card = await Card.findOne({ title: req.params.title });
        if (!card) return res.status(404).json({ error: 'Card not found' });
        res.status(200).json(card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
