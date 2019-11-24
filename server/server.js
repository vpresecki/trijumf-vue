const express = require("express");
const server = express();
const cors = require("cors");
const history = require("connect-history-api-fallback");

const gameRoute = require("./routes/words");
server.use("/api/trijumf/game", gameRoute);

// Handle production
if (process.env.NODE_ENV === "production") {
  server.use(express.static(__dirname + "/public/"));
}

// Handle SPA
server.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

server.use(cors());
server.use(
  history({
    disableDotRule: true,
    verbose: true
  })
);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
