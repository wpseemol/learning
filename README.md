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

## MongoDB database run with docker

### MongoDB databases run with docker composes yml file.

To quickly run a MongoDB database using Docker Compose, create a `docker-compose.yml` file with the following content:

```yaml
version: "3.8"
services:
     mongodb:
          image: mongo:latest
          container_name: mongodb
          ports:
               - "27017:27017"
          environment:
               MONGO_INITDB_ROOT_USERNAME: root
               MONGO_INITDB_ROOT_PASSWORD: 123456
          volumes:
               - mongodb_data:/data/db

volumes:
     mongodb_data:
```

Start MongoDB with:

```bash
docker compose up -d
```

Stop and remove the container with:

```bash
docker compose down
```

### mongodb use with docker cli commend

docker run -d \
 --name mongodb \
 -p 27017:27017 \
 -e MONGO_INITDB_ROOT_USERNAME=root \
 -e MONGO_INITDB_ROOT_PASSWORD=123456 \
 mongo:latest

     - `--name mongodb`: Names the container "mongodb".
     - `-p 27017:27017`: Maps the default MongoDB port to your local machine.
     - `-e MONGO_INITDB_ROOT_USERNAME` and `-e MONGO_INITDB_ROOT_PASSWORD`: Set the root username and password.
     - `mongo:latest`: Uses the latest official MongoDB image.

     To stop and remove the container:

     ```bash
     docker stop mongodb
     docker rm mongodb

### Accessing MongoDB Shell Inside a Docker Container.

You can first use the comment to access docker inside terminal use this command

```bash

     docker exec -it mongodb bash

```

then you can use mongodb database use commend inside running ubuntu.

```bash
     mongosh -u root -p 123456
```

If your MongoDB server is running inside a Docker container, you can access the interactive MongoDB shell (`mongosh`) directly within the container using the following command:

```bash
docker exec -it mongodb mongosh -u root -p 123456 --authenticationDatabase admin
```

-    `docker exec -it mongodb`: Runs a command in the running container named `mongodb` with interactive terminal access.
-    `mongosh`: Starts the MongoDB shell inside the container.
-    `-u root`: Specifies the MongoDB username.
-    `-p 123456`: Specifies the MongoDB password.
-    `--authenticationDatabase admin`: Authenticates against the `admin` database (required for root user).

This command opens an interactive shell session connected to your MongoDB instance running inside Docker. You can now run MongoDB commands as usual.

To exit the shell, type:

```javascript
> exit
```

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

## Creating a Database in MongoDB

In MongoDB, databases are created implicitly when you first store data in them. You do not need an explicit "create database" command. Instead, you switch to a database and insert data.

### Using the MongoDB Shell

To create (or switch to) a database:

```javascript
use myNewDatabase
```

This command switches to `myNewDatabase`. If it does not exist, MongoDB will create it when you first insert data.

create collection mongodb

```javascript
db.createCollection("collection_name");
```

show mongodb collection

```javascript
     show collections;
```

To create a collection and insert a document:

```javascript
db.myCollection.insertOne({ name: "Alice", age: 25 });
```

Now, `myNewDatabase` exists with a collection called `myCollection`.

### Verifying Database Creation

List all databases to confirm:

```javascript
show dbs
```

Note: Only databases with at least one document will appear in the list.

### Summary

-    Use `use <databaseName>` to switch/create a database.
-    Insert data to actually create the database.
-    Use `show dbs` to list databases.

### Collection rename

Collection rename method

```javascript
bd.collection.renameCollection("update_name");
```

### Show all mongodb comment

Use the commend show all comment.

```javascript
db.help();
```

more about collection all comment.

```javascript
db.collection_name.help();
```

### Deleted collection.

drop collection for your database.

```javascript
bd.collection_name.drop();
```

deleted database

```javascript
db.dropDatabase();
```

### Data insert in mongodb, In MongoDB data call document.

#### Insert One Document

To insert a single document into a collection, use the `insertOne()` method:

```javascript
db.collection_name.insertOne({ name: "Bob", age: 28 });
```

This command adds a new document with the specified fields to the collection.

#### Insert Many Documents

To insert multiple documents at once, use the `insertMany()` method:

```javascript
db.collection_name.insertMany([
     { name: "Carol", age: 32 },
     { name: "Dave", age: 24 },
     { name: "Eve", age: 29 },
]);
```

This command inserts all the provided documents into the collection in a single operation.

#### Show data

```javascript
db.collection_name.find();
```

**Note:** Replace `collection_name` with your actual collection name.

## MongoDB Data Types

MongoDB supports a variety of data types for storing values in documents. Some of the most commonly used types include:

-    **String**: Used to store text data.
-    **Number**: Includes `int`, `long`, `double`, and `decimal` types for numeric values.
-    **Boolean**: Stores `true` or `false`.
-    **Array**: Stores lists of values.
-    **Object**: Embedded documents (sub-documents).
-    **Date**: Stores date and time values.
-    **ObjectId**: A special type used for unique document identifiers.
-    **Null**: Represents a null value.
-    **Binary Data**: Stores binary data.
-    **Regular Expression**: Stores regular expressions.

Example document with various data types:

```javascript
{
     name: "Alice",
     age: 30,
     isActive: true,
     hobbies: ["reading", "coding"],
     address: { city: "New York", zip: "10001" },
     createdAt: ISODate("2024-06-01T10:00:00Z"),
     _id: ObjectId("60c72b2f9af1f23d8c8e6e77"),
     profilePicture: BinData(0, "base64data"),
     pattern: /abc/i,
     spouse: null
}
```

For a full list, see the [MongoDB BSON Types documentation](https://www.mongodb.com/docs/manual/reference/bson-types/).

## MongoDB JSON Schema Validation

MongoDB supports JSON Schema validation to enforce the structure and content of documents within a collection. This allows you to define rules for required fields, data types, value ranges, and more, helping maintain data integrity.

### Defining a Schema Validator

You can specify a schema when creating a collection or by updating an existing collection using the `validator` option. The schema uses the [JSON Schema](https://json-schema.org/) standard.

**Example: Create a collection with schema validation**

```javascript
db.createCollection("users", {
     validator: {
          $jsonSchema: {
               bsonType: "object",
               required: ["name", "email", "age"],
               properties: {
                    name: {
                         bsonType: "string",
                         description: "must be a string and is required",
                    },
                    email: {
                         bsonType: "string",
                         pattern: "^.+@.+$",
                         description:
                              "must be a valid email address and is required",
                    },
                    age: {
                         bsonType: "int",
                         minimum: 18,
                         description:
                              "must be an integer greater than or equal to 18 and is required",
                    },
               },
          },
     },
});
```

### Updating Schema Validation on an Existing Collection

You can add or modify validation rules using the `collMod` command:

```javascript
db.runCommand({
     collMod: "users",
     validator: {
          $jsonSchema: {
               bsonType: "object",
               title: "Student Object Validation",
               required: ["name", "email"],
               properties: {
                    name: {
                         bsonType: "string",
                         description: "'name' must be a string and is required",
                    },
                    email: { bsonType: "string" },
                    year: {
                         bsonType: "int",
                         minimum: 2017,
                         maximum: 3017,
                         description:
                              "'year' must be an integer in [ 2017, 3017 ] and is required",
                    },
                    country: {
                         enum: ["France", "United Kingdom", "United States"],
                         description:
                              "Must be either France, United Kingdom, or United States",
                    },
               },
          },
     },
});
```

### Validation Levels

-    **strict**: Rejects any document that fails validation (default).
-    **moderate**: Only newly inserted or updated documents are validated.

Set the validation level and action:

```javascript
db.createCollection("products", {
     validator: {
          /* schema */
     },
     validationLevel: "strict", // or "moderate"
     validationAction: "error", // or "warn"
});
```

### Benefits

-    Ensures data consistency and quality.
-    Prevents accidental insertion of malformed documents.
-    Makes application code simpler by offloading validation to the database.

For more details, see the [MongoDB Schema Validation documentation](https://www.mongodb.com/docs/manual/core/schema-validation/).

## Setting Validation Rules on an Existing Collection

To set or update validation rules on an existing MongoDB collection, use the `db.runCommand` method with the `collMod` command. This allows you to define or modify the schema validator for the collection.

**Example: Add or update validation rules on the `users` collection**

```javascript
db.runCommand({
     collMod: "users",
     validator: {
          $jsonSchema: {
               bsonType: "object",
               required: ["name", "email"],
               properties: {
                    name: {
                         bsonType: "string",
                         description: "must be a string and is required",
                    },
                    email: {
                         bsonType: "string",
                         pattern: "^.+@.+$",
                         description:
                              "must be a valid email address and is required",
                    },
                    age: {
                         bsonType: "int",
                         minimum: 18,
                         description:
                              "must be an integer greater than or equal to 18",
                    },
               },
          },
     },
     validationLevel: "strict", // Optional: "strict" or "moderate"
     validationAction: "error", // Optional: "error" or "warn"
});
```

-    `collMod`: The name of the collection to modify.
-    `validator`: The JSON Schema validation rules.
-    `validationLevel`: (Optional) Determines which operations are validated.
-    `validationAction`: (Optional) Determines whether to error or warn on validation failure.

**Note:** Only documents inserted or updated after setting the validator are affected by the new rules.

For more details, see the [MongoDB collMod documentation](https://www.mongodb.com/docs/manual/reference/command/collMod/).

## Updating Documents in MongoDB

MongoDB provides methods to update documents in a collection: `updateOne()` for a single document and `updateMany()` for multiple documents.

### `updateOne()`

Updates the first document that matches the filter.

**Syntax:**

```javascript
db.collection_name.updateOne(
     { filter_field: value }, // Filter criteria
     { $set: { field_to_update: new_value } } // Update operation
);
```

**Example:**

```javascript
db.users.updateOne({ name: "Alice" }, { $set: { age: 31 } });
```

This updates the `age` of the first user named "Alice" to 31.

### `updateMany()`

Updates all documents that match the filter.

**Syntax:**

```javascript
db.collection_name.updateMany(
     { filter_field: value }, // Filter criteria
     { $set: { field_to_update: new_value } } // Update operation
);
```

**Example:**

```javascript
db.users.updateMany({ isActive: false }, { $set: { isActive: true } });
```

This sets `isActive` to `true` for all users where `isActive` is currently `false`.

### Reading Updated Documents

To verify updates, use `find()`:

```javascript
db.users.find({ name: "Alice" });
db.users.find({ isActive: true });
```

**Note:** Replace `collection_name` and field names with your actual collection and fields.

For more details, see the [MongoDB update documentation](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/) and [updateMany](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany/).
