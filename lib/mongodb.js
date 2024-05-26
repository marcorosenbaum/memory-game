import { MongoClient } from "mongodb";

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  console.log("before client");
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("after client");

  const db = client.db("memory_cards");
  console.log("after db");

  cachedDb = db;
  return db;
}

export { connectToDatabase };
