const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();
const lineReader = require("line-reader");

let words = new Array();
lineReader.eachLine("./words.txt", line => {
  words.push(line);
});

// INSERT WORDS FROM FILE TO DATABASE

router.post("/", async (req, res) => {
  const w = await loadWords();
  await words.forEach(word => {
    w.insertOne({
      word: word,
      goodAnswer: false
    });
  });
  res.status(201).send();
});

// GET ALL WORDS FROM DATABASE AND FORM AN ARRAY
router.get("/words", async (req, res) => {
  const words = await loadWords();
  res.send(await words.find({}).toArray());
});

async function loadWords() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://admin:admin@trijumf-sbtad.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  return client.db("trijumf_db").collection("words");
}
module.exports = router;
