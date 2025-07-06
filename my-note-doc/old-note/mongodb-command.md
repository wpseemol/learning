# MongoDB Commend

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
