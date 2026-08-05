const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const welcomeRoutes = require("./routers/welcome.routers");

app.use("/", welcomeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
