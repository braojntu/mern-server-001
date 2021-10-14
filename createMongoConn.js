import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

export async function createConnection() {
    //const MONGO_URL = "mongodb://localhost/users";
    const MONGO_URL = process.env.MONGO_URL;
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    //console.log("Successfully Connected to local MongoDB");
    console.log("Successfully Connected to cloud MongoDB");
    return client;
    // console.log(users);
}