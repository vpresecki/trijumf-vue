const express = require("express");
const server = express();

const homeRoute = require("./routes/words");
server.use("/api/trijumf/game", homeRoute);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
