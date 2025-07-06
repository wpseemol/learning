# MongoDB `deleteOne` and `deleteMany` Usage

MongoDB provides two main methods for deleting documents from a collection: `deleteOne()` and `deleteMany()`.

## `deleteOne()`

Deletes a single document that matches the filter.

**Example:**

```js
db.users.deleteOne({ username: "john_doe" });
```

This deletes the first document in the `users` collection where `username` is `"john_doe"`.

## `deleteMany()`

Deletes all documents that match the filter.

**Example:**

```js
db.orders.deleteMany({ status: "cancelled" });
```

This deletes all documents in the `orders` collection where `status` is `"cancelled"`.

## References

-    [MongoDB deleteOne() Documentation](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/)
-    [MongoDB deleteMany() Documentation](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteMany/)
