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

const uri = "mongodb://root:123456@localhost:27017/database_name?authSource=admin";
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

-    **`mongodb://root:123456@localhost:27017/database_name?authSource=admin`**: This is the connection string.

     -    `root`: The username for authentication.
     -    `123456`: The password for authentication.
     -    `localhost`: The hostname where MongoDB is running.
     -    `27017`: The default port for MongoDB.

-    **`MongoClient`**: A class provided by the MongoDB Node.js driver to connect to the database.

-    **`connectToDatabase`**: An asynchronous function that connects to the MongoDB server, logs a success message, and closes the connection.

Make sure your MongoDB server is running locally and the credentials match your setup.

## MongoDB Command Reference

For a comprehensive list of MongoDB commands and their usage, see [mongodb-command.md](./mongodb-command.md).

## Mongodb Data type

For a detailed reference on MongoDB data types, see [mongodb-data-type.md](./mongodb-data-type.md).

## MongoDB Data Validation

For information on how to validate data in MongoDB, see [mongodb-validation.md](./mongodb-validation.md).

## MongoDB Update Operations

MongoDB provides powerful update operators to modify documents in a collection. Updates can target single or multiple documents and support a variety of operators for flexible data manipulation.

### Common Update Operators

-    **$set**: Sets the value of a field.
-    **$unset**: Removes a field from a document.
-    **$inc**: Increments a field by a specified value.
-    **$push**: Adds an item to an array.
-    **$pull**: Removes items from an array that match a condition.
-    **$rename**: Renames a field.

For a detailed guide on update operations and operators, see [mongodb-update.md](./mongodb-update.md).

## MongoDB Delete Operations

MongoDB supports various methods to delete documents from a collection. You can remove single or multiple documents based on specified criteria.

### Common Delete Methods

-    **deleteOne()**: Deletes the first document that matches the filter.
-    **deleteMany()**: Deletes all documents that match the filter.
-    **findOneAndDelete()**: Finds and deletes a single document, returning the deleted document.

For a detailed reference on delete operations, see [mongodb-deleted.md](./mongodb-deleted.md).
