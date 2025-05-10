# Learning MongoDB Database

MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It is designed for scalability, high performance, and ease of development.

## Key Concepts

-    **Document**: A record in MongoDB, stored in BSON format (Binary JSON).
-    **Collection**: A group of documents, similar to a table in relational databases.
-    **Database**: A container for collections.

## Advantages

-    Schema-less design allows flexibility.
-    Horizontal scaling with sharding.
-    High availability with replication.

## Basic Commands

-    **Insert a document**:
     ```javascript
     db.collection.insertOne({ name: "John", age: 30 });
     ```
-    **Find documents**:
     ```javascript
     db.collection.find({ age: { $gt: 25 } });
     ```
-    **Update a document**:
     ```javascript
     db.collection.updateOne({ name: "John" }, { $set: { age: 31 } });
     ```
-    **Delete a document**:
     ```javascript
     db.collection.deleteOne({ name: "John" });
     ```

## Resources

-    [MongoDB Documentation](https://www.mongodb.com/docs/)
-    [MongoDB University](https://university.mongodb.com/)

Happy learning!

## Connecting to MongoDB

To connect to your MongoDB server, use the following connection string:

```javascript
const { MongoClient } = require("mongodb");

const uri = "mongodb://root:123456@localhost:27017";
const client = new MongoClient(uri);

async function connectToDatabase() {
     try {
          await client.connect();
          console.log("Connected to MongoDB!");
          // Perform database operations here
     } catch (error) {
          console.error("Error connecting to MongoDB:", error);
     } finally {
          await client.close();
     }
}

connectToDatabase();
```

### Explanation:

-    **`mongodb://root:123456@localhost:27017`**: This is the connection string.

     -    `root`: The username for authentication.
     -    `123456`: The password for authentication.
     -    `localhost`: The hostname where MongoDB is running.
     -    `27017`: The default port for MongoDB.

-    **`MongoClient`**: A class provided by the MongoDB Node.js driver to connect to the database.

-    **`connectToDatabase`**: An asynchronous function that connects to the MongoDB server, logs a success message, and closes the connection.

Make sure your MongoDB server is running locally and the credentials match your setup.

# MongoDB Commend

## MongoDB Command: `show dbs`

The `show dbs` command is used in the MongoDB shell to list all the databases available on the connected MongoDB server. It provides a quick overview of the databases and their approximate sizes.

### Syntax:

```javascript
show dbs
```
