const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 7000;
const dotenv = require("dotenv");
dotenv.config();
const uri = `mongodb+srv://jv20:${process.env.PASSWORD_MONGODB}@cluster0.ndfhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function main() {
  try {
    await client.connect();
  } catch (error) {}
}

main();

app.post("/stored", async (req, res) => {
  console.log(req.body);
  await addTodo(client, {
    name: "Lovely Loft",
    summary: "A charming loft in Paris",
    bedrooms: 1,
    bathrooms: 1,
  });
});

async function addTodo(newTodo) {
  const result = await client
    .db("todo")
    .collection("listingsAndReviews")
    .insertOne(newTodo);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
