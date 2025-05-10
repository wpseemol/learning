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
