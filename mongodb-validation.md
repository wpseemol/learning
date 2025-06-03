# MongoDB Data Validation

MongoDB provides schema validation at the collection level using JSON Schema. This helps ensure data consistency by enforcing rules on the structure and content of documents.

## Reference

-    [MongoDB Schema Validation Documentation](https://www.mongodb.com/docs/manual/core/schema-validation/)
-    [JSON Schema Reference](https://json-schema.org/)

## Example: Enforcing Validation Rules

Suppose you want to ensure that every document in the `users` collection has a `name` (string), `age` (integer, >=18), and an optional `email` (string, must match email format).

```js
db.createCollection("users", {
     validator: {
          $jsonSchema: {
               bsonType: "object",
               required: ["name", "age"],
               properties: {
                    name: {
                         bsonType: "string",
                         description: "must be a string and is required",
                    },
                    age: {
                         bsonType: "int",
                         minimum: 18,
                         description:
                              "must be an integer >= 18 and is required",
                    },
                    email: {
                         bsonType: "string",
                         pattern: "^.+@.+$",
                         description:
                              "must be a valid email address if present",
                    },
               },
          },
     },
     validationLevel: "strict",
     validationAction: "error",
});
```

## How It Works

-    **validator**: Defines the validation rules using JSON Schema.
-    **validationLevel**: `"strict"` means all inserts and updates are validated.
-    **validationAction**: `"error"` rejects invalid documents.

## Updating Validation Rules

You can update validation rules using `collMod`:

```js
db.runCommand({
     collMod: "users",
     validator: {
          /* new rules */
     },
});
```

## Example: Insert Valid and Invalid Documents

```js
// Valid
db.users.insertOne({ name: "Alice", age: 25, email: "alice@example.com" });

// Invalid (age < 18)
db.users.insertOne({ name: "Bob", age: 16 });
// Error: Document failed validation
```

## Adding Validation to an Existing Collection

To add or modify validation rules for an existing collection, use the `collMod` command. This allows you to enforce schema validation without recreating the collection.

### Example: Add Validation to Existing Collection

Suppose you have an existing `products` collection and want to require each document to have a `title` (string) and `price` (number, >= 0):

```js
db.runCommand({
     collMod: "products",
     validator: {
          $jsonSchema: {
               bsonType: "object",
               required: ["title", "price"],
               properties: {
                    title: {
                         bsonType: "string",
                         description: "must be a string and is required",
                    },
                    price: {
                         bsonType: "number",
                         minimum: 0,
                         description:
                              "must be a non-negative number and is required",
                    },
               },
          },
     },
     validationLevel: "strict",
     validationAction: "error",
});
```

### Reference

-    [MongoDB collMod Command Documentation](https://www.mongodb.com/docs/manual/reference/command/collMod/)
