const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const router = require('express').Router();


router.get('/notes', (req, res) => {

// getting notes from db
    res.json(db);


});



router.post('/notes', (req, res) => {


    const { title, text } = req.body;
    const newNote = { title, text, id:Math.floor(Math.random()* 1000) };
    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);


});


router.delete('/notes/:id', (req, res) => {


    const id = parseInt(req.params.id);
    const updatedNotes = db.filter(note => note.id !== id);
    
    fs.writeFileSync('db/db.json', JSON.stringify(updatedNotes));
    res.json(updatedNotes);


});

module.exports = router;