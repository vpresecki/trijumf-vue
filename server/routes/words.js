const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();
const lineReader = require("line-reader");

// let words = new Array();
// lineReader.eachLine("./words.txt", line => {
//   words.push(line);
// });

// INSERT WORDS FROM FILE TO DATABASE

// router.post("/", async (req, res) => {
//   const w = await connectDB();
//   await words.forEach(word => {
//     w.insertOne({
//       word: word,
//       goodAnswer: false
//     });
//   });
//   res.status(201).send();
// });

// GET WORDS FROM DB AND FORM AN ARRAY
const getWords = async () => {
  const db = await connectDB();
  return await db.find({}).toArray();
};

// TAKE 5 WORDS THAT WILL BE SEND TO FRONT
let drawWords = async () => {};

// SEND WORDS TO FRONT
router.get("/words", async (req, res) => {
  res.send(await drawWords());
});

async function connectDB() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://admin:admin@trijumf-sbtad.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  return client.db("trijumf_db").collection("words");
}
module.exports = router;
