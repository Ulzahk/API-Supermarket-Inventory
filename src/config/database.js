const { MongoClient } = require("mongodb");
const { DB_URL, DB_NAME, DB_COLLECTION } = require("./env-variables");

const client = new MongoClient(DB_URL);
let collection;
let listItems;

const main = async () => {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(DB_NAME);
  collection = db.collection(DB_COLLECTION);

  const insertOneElement = async object => {
    return (insertResult = await collection.insertOne(object));
  };
  // listItems = async () => {
  //   const listItems = await collection.find({}).toArray();
  //   console.log("Found documents =>", findResult);
  // };
  return {
    insertOneElement,
  };
};

module.exports = {
  main,
};
