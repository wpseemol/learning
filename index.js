const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

const userRouter = require("./router/user");

app.use("/api/users", userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
