const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            res.end("Error reading file");
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
