const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

const userRoutes = require("./routes/user");

// Use the user routes for any requests to /users
app.use("/api/users", userRoutes);

// web server listening on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
