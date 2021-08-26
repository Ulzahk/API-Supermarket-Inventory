const { MongoClient } = require("mongodb");
const { DB_URL, DB_NAME, DB_COLLECTION } = require("./env-variables");

const client = new MongoClient(DB_URL);

const main = async () => {
  await client.connect();
  // console.log("Connected successfully to server");
  const db = client.db(DB_NAME);
  const collection = db.collection(DB_COLLECTION);

  const insertOneElement = async object => {
    return await collection.insertOne(object);
  };
  const listElements = async () => {
    return await collection.find({}).toArray();
  };
  const listOneElementById = async elementId => {
    return await collection.findOne({ _id: elementId });
  };
  const listElementsByCategory = async elementsCategory => {
    return await collection.find({ Category: elementsCategory }).toArray();
  };
  const updateElement = async (elementId, objectUpdated) => {
    return await collection.findOneAndUpdate(
      { _id: elementId },
      { $set: objectUpdated },
      { upsert: true }
    );
  };
  const deleteElement = async elementId => {
    return await collection.deleteOne({ _id: elementId });
  };
  return {
    insertOneElement,
    listElements,
    listOneElementById,
    listElementsByCategory,
    updateElement,
    deleteElement,
  };
};

module.exports = {
  main,
};
