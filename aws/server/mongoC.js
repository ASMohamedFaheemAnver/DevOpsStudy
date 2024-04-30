import { MongoClient } from "mongodb";

const username = encodeURIComponent(process.env.MONGO_USERNAME.trim());
const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://${username}:${password}@cluster0.o9rvj16.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
let db = conn.db("udev");
export default db;
