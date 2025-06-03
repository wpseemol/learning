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
