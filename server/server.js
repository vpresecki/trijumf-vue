const express = require("express");
const server = express();
const cors = require("cors");

server.use(cors());

const homeRoute = require("./routes/words");
server.use("/api/trijumf/game", homeRoute);

// Handle production
if (process.env.NODE_ENV === "production") {
  server.use(express.static(__dirname + "/public"));
}

// Handle SPA
server.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
