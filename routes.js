// routes.js

const express = require('express');
const path = require('path'); // Make sure to import the path module
const router = express.Router();

// Serve the home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the illustrations page
router.get('/illustrations', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'illustrations.html'));
});

// Serve the embroidery page
router.get('/embroidery', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'embroidery.html'));
});

// Serve the dress making page
router.get('/dress_making', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dress_making.html'));
});

// Serve the modelling page
router.get('/modelling', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'modelling.html'));
});

module.exports = router;
