const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(url);

async function run() {
  try {
    await mongoClient.connect();
    const db = mongoClient.db("usersdb");
    const collection = db.collection("users");
    const user = { name: "Tom", age: 28 };
    const result = await collection.insertOne(user);
    console.log(result);
    console.log(user);
  } catch (err) {
    console.log(err);
  } finally {
    await mongoClient.close();
  }
}
run().catch(console.error);
