# MongoDB Data Types

MongoDB supports a variety of data types for storing different kinds of data in documents. Below is a detailed overview of the most commonly used types:

## 1. String

-    **Description:** Used to store text data.
-    **Example:** `"name": "Alice"`

## 2. Integer

-    **Description:** Stores 32-bit or 64-bit integer values.
-    **Example:** `"age": 30`

## 3. Double

-    **Description:** Stores floating-point values.
-    **Example:** `"price": 19.99`

## 4. Boolean

-    **Description:** Stores `true` or `false`.
-    **Example:** `"isActive": true`

## 5. Array

-    **Description:** Stores a list of values.
-    **Example:** `"tags": ["mongodb", "database", "nosql"]`

## 6. Object

-    **Description:** Stores embedded documents (sub-documents).
-    **Example:**
     ```json
     "address": {
         "city": "New York",
         "zip": "10001"
     }
     ```

## 7. Null

-    **Description:** Stores a null value.
-    **Example:** `"middleName": null`

## 8. ObjectId

-    **Description:** A 12-byte unique identifier for documents.
-    **Example:** `"_id": ObjectId("507f1f77bcf86cd799439011")`

## 9. Date

-    **Description:** Stores date and time in UTC.
-    **Example:** `"createdAt": ISODate("2024-06-01T12:00:00Z")`

## 10. Binary Data

-    **Description:** Stores binary data.
-    **Example:** `"fileData": BinData(0,"base64data")`

## 11. Code

-    **Description:** Stores JavaScript code.
-    **Example:** `"script": Code("function() { return true; }")`

## 12. Regular Expression

-    **Description:** Stores regular expressions.
-    **Example:** `"pattern": /abc/i`

## 13. Timestamp

-    **Description:** Special internal type for timestamping.
-    **Example:** `"ts": Timestamp(1627847267, 1)`

## 14. Min/Max Key

-    **Description:** Special types for comparing values.
-    **Example:**
     -    MinKey: `{"value": MinKey()}`
     -    MaxKey: `{"value": MaxKey()}`

---

**Note:** MongoDB is schema-less, so documents in the same collection can have different sets of fields and data types.

## Use Cases for MongoDB Data Types

Below are practical use cases for each MongoDB data type, along with examples and reference links for further reading:

| Data Type          | Use Case Example                                                         | Reference Link                                                                                      |
| ------------------ | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| String             | Storing user names, emails, or product descriptions.                     | [MongoDB String](https://www.mongodb.com/docs/manual/reference/bson-types/#string)                  |
| Integer            | Counting items, tracking age, or storing quantities.                     | [MongoDB Integer](https://www.mongodb.com/docs/manual/reference/bson-types/#int32)                  |
| Double             | Storing prices, measurements, or scientific data.                        | [MongoDB Double](https://www.mongodb.com/docs/manual/reference/bson-types/#double)                  |
| Boolean            | Indicating active/inactive status, feature toggles, or flags.            | [MongoDB Boolean](https://www.mongodb.com/docs/manual/reference/bson-types/#bool)                   |
| Array              | Storing tags, lists of items, or multiple addresses.                     | [MongoDB Array](https://www.mongodb.com/docs/manual/core/document/#arrays)                          |
| Object             | Embedding address or profile information within a user document.         | [MongoDB Embedded Documents](https://www.mongodb.com/docs/manual/core/document/#embedded-documents) |
| Null               | Representing missing or unknown values, such as an optional middle name. | [MongoDB Null](https://www.mongodb.com/docs/manual/reference/bson-types/#null)                      |
| ObjectId           | Uniquely identifying each document in a collection.                      | [MongoDB ObjectId](https://www.mongodb.com/docs/manual/reference/bson-types/#objectid)              |
| Date               | Tracking creation or update timestamps for documents.                    | [MongoDB Date](https://www.mongodb.com/docs/manual/reference/bson-types/#date)                      |
| Binary Data        | Storing images, files, or encrypted data.                                | [MongoDB Binary Data](https://www.mongodb.com/docs/manual/reference/bson-types/#binData)            |
| Code               | Saving server-side scripts or custom logic within documents.             | [MongoDB Code](https://www.mongodb.com/docs/manual/reference/bson-types/#code)                      |
| Regular Expression | Searching for patterns in text fields, such as email validation.         | [MongoDB Regular Expression](https://www.mongodb.com/docs/manual/reference/bson-types/#regex)       |
| Timestamp          | Versioning records or tracking changes in replication.                   | [MongoDB Timestamp](https://www.mongodb.com/docs/manual/reference/bson-types/#timestamp)            |
| Min/Max Key        | Performing range queries or sorting with boundary values.                | [MongoDB MinKey/MaxKey](https://www.mongodb.com/docs/manual/reference/bson-types/#minkey)           |

**Example:**

```json
{
    "_id": ObjectId("60c72b2f9af1f23d8c8e6b10"),
    "name": "Alice",
    "age": 30,
    "email": "alice@example.com",
    "isActive": true,
    "tags": ["mongodb", "database"],
    "address": {
        "city": "New York",
        "zip": "10001"
    },
    "createdAt": ISODate("2024-06-01T12:00:00Z"),
    "profilePicture": BinData(0,"base64data"),
    "script": Code("function() { return true; }"),
    "pattern": /abc/i,
    "ts": Timestamp(1627847267, 1),
    "value": MinKey()
}
```
