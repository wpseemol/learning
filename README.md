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

## Accessing MongoDB Shell Inside a Docker Container

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
