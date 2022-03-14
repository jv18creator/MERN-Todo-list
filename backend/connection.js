const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://jv20:tq1V0lmA3qeV972I@cluster0.ndfhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(uri);
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("client established", client);

    // create a function that lists avaialable databases
    // await listDatabases(client);

    // create new airbnb listing
    await createListing(client, {
      name: "Lovely Loft",
      summary: "A charming loft in Paris",
      bedrooms: 1,
      bathrooms: 1,
    });

    // Make the appropriate DB calls
  } catch (err) {
    console.log("error occured", err);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);

// Add functions that make DB calls here

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function createListing(client, newListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertOne(newListing);

  // sample_airbnb here is database
  // listingsAndReviews is a collection of sample_airbnb

  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}
