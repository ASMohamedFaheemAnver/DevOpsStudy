import { MongoClient } from "mongodb";

const connectionString = `mongodb://root:password@mongo-primary:27017,mongo-worker-1:27017,mongo-worker-2:27017,mongo-worker-3:27017/?replicaSet=replica-set`;
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
let db = conn.db("udev");
export default db;
