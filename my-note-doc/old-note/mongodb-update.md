# MongoDB `updateOne` and `updateMany`

MongoDB provides several update operators to modify documents. Here are some commonly used operators:

## `$set` Operator

The `$set` operator sets the value of a field in a document.

**Example:**

```js
db.users.updateOne(
     { username: "carol" },
     { $set: { email: "carol@example.com" } }
);
```

This sets the `email` field for the user with `username` `"carol"`.

**Reference:**  
[MongoDB $set Operator Documentation](https://www.mongodb.com/docs/manual/reference/operator/update/set/)

## `$unset` Operator

The `$unset` operator removes a field from a document.

**Example:**

```js
db.users.updateOne({ username: "dave" }, { $unset: { phone: "" } });
```

This removes the `phone` field from the user with `username` `"dave"`.

**Reference:**  
[MongoDB $unset Operator Documentation](https://www.mongodb.com/docs/manual/reference/operator/update/unset/)

## `$push` Operator

The `$push` operator appends a value to an array field.

**Example:**

```js
db.users.updateOne({ username: "eve" }, { $push: { roles: "admin" } });
```

This adds `"admin"` to the `roles` array for the user with `username` `"eve"`.

**Reference:**  
[MongoDB $push Operator Documentation](https://www.mongodb.com/docs/manual/reference/operator/update/push/)

## `$pull` Operator

The `$pull` operator removes all array elements that match a specified condition.

**Example:**

```js
db.users.updateOne({ username: "frank" }, { $pull: { roles: "guest" } });
```

This removes `"guest"` from the `roles` array for the user with `username` `"frank"`.

**Reference:**  
[MongoDB $pull Operator Documentation](https://www.mongodb.com/docs/manual/reference/operator/update/pull/)

## `$addToSet` Operator

The `$addToSet` operator adds a value to an array only if the value does not already exist in the array.

**Example:**

```js
db.users.updateOne({ username: "grace" }, { $addToSet: { roles: "editor" } });
```

This adds `"editor"` to the `roles` array for the user with `username` `"grace"` only if it is not already present.

**Reference:**  
[MongoDB $addToSet Operator Documentation](https://www.mongodb.com/docs/manual/reference/operator/update/addToSet/)

## `$min` Operator

The `$min` operator updates the value of the field to a specified value if the specified value is less than the current value of the field.

**Example:**

```js
db.users.updateOne({ username: "hannah" }, { $min: { age: 25 } });
```

This sets the `age` field to `25` for the user with `username` `"hannah"` only if the current `age` is greater than `25`.

**Reference:**  
[MongoDB $min Operator Documentation](https://www.mongodb.com/docs/manual/reference/operator/update/min/)

## `replaceOne` Method

The `replaceOne` method replaces an entire document with a new document. Unlike update operators, `replaceOne` does not use update operators like `$set` or `$unset`; instead, it completely overwrites the matched document.

**Example:**

```js
db.users.replaceOne(
     { username: "ivan" },
     { username: "ivan", email: "ivan@example.com", age: 30 }
);
```

This replaces the entire document for the user with `username` `"ivan"` with the new document. Any fields not specified in the replacement document will be removed.

**Reference:**  
[MongoDB replaceOne Documentation](https://www.mongodb.com/docs/manual/reference/method/db.collection.replaceOne/)
