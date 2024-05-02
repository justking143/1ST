const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Serve static files from the directory where server.js is located
app.use(express.static(__dirname));

// Define a route handler for the root URL ("/")
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Directly specify the path to login.html
});

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route handler for POST requests to "/login"
app.post('/login', (req, res) => {
    // Retrieve username and password from the form data
    const username = req.body.username;
    const password = req.body.password;

    // Here you can handle the username and password as needed
    // For example, you can validate the credentials against a database
    // For now, let's just log them to the console
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    // Redirect the user to another page or send a response as needed
    res.sendFile(__dirname + '/anonymous.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
