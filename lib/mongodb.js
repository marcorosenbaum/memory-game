import { MongoClient } from "mongodb";

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  console.log("before client");
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI, {});
    console.log("after client");

    const db = client.db("memory_cards");

    console.log("after db");

    cachedDb = db;
    return db;
  } catch (err) {
    console.error("Failed to connect to the database", err);
    throw err;
  }
}

export { connectToDatabase };
