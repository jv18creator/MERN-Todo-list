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
    await listDatabases(client);

    // Make the appropriate DB calls
  } catch (err) {
    console.log("error occured", err);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

// Add functions that make DB calls here
