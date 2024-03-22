// Create a web server.
// When a user navigates to the page /comments, the server should return a list of comments in JSON format.

const express = require('express');
const app = express();
const port = 3000;

const comments = [
    { id: 1, author: 'user1', comment: 'first comment' },
    { id: 2, author: 'user2', comment: 'second comment' },
    { id: 3, author: 'user3', comment: 'third comment' },
    { id: 4, author: 'user4', comment: 'fourth comment' },
    { id: 5, author: 'user5', comment: 'fifth comment' }
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
