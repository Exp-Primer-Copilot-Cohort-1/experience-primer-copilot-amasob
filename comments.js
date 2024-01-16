// Create web server
var express = require('express');
var router = express.Router();

// Load the MySQL pool connection
var pool = require('../db/dbconfig');

// GET COMMENTS
router.get('/getcomments', function (req, res) {
    // Retrieve all comments
    pool.query('SELECT * FROM Comments', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

// POST COMMENTS
router.post('/postcomments', function (req, res) {
    // Retrieve all comments
    pool.query('INSERT INTO Comments (username, comment) VALUES (?, ?)', [req.body.username, req.body.comment], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

module.exports = router;
