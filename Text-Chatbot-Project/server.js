const express = require("express");
const path = require("path");

const app = express();

const PORT = 5000;


// Serve frontend files

app.use(
    express.static(__dirname)
);


// Home route

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "index.html")
    );

});


// Start server

app.listen(PORT, () => {

    console.log(
        `Chatbot server running at http://localhost:${PORT}`
    );

});