# Learning Node.js

## Install Dev Dependencies

```sh
yarn add -D eslint prettier
npx install-peerdeps --dev eslint-config-airbnb-base
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

## Setup Linting Configuration file

Create a `.eslintrc.json` file in the project root and enter the below contents:

```json
{
    "extends": ["prettier", "airbnb-base"],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "env": {
        "commonjs": true,
        "node": true
    },
    "rules": {
        "no-console": 0,
        "indent": 0,
        "linebreak-style": 0,
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 100,
                "tabWidth": 4,
                "semi": true
            }
        ]
    },
    "plugins": ["prettier"]
}
```

<!-- -------------------- -->

Welcome to the **Learning Node.js** repository! This project is designed to help you get started with Node.js, explore its features, and build foundational skills for creating server-side applications.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Setup](#setup)
4. [Key Topics](#key-topics)
5. [Example Projects](#example-projects)
6. [Resources](#resources)

---

## Introduction

Node.js is a powerful JavaScript runtime built on Chrome's V8 engine. It enables developers to run JavaScript on the server side and build scalable, fast, and efficient applications. This repository will guide you through:

-   Understanding the basics of Node.js
-   Exploring the Node.js runtime and modules
-   Building simple applications
-   Working with APIs and databases

## Prerequisites

Before you start learning Node.js, ensure you have the following:

1. **Basic knowledge of JavaScript**: Familiarity with JavaScript syntax and concepts like functions, objects, and ES6 features is recommended.
2. **A code editor**: [Visual Studio Code](https://code.visualstudio.com/) is highly recommended.
3. **Node.js installed**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
4. **A terminal**: A command-line interface like Terminal (macOS/Linux) or Command Prompt/PowerShell (Windows).

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/wpseemol/learning/tree/nodejs
    ```

2. Navigate to the project directory:

    ```bash
    cd nodejs
    ```

3. Install dependencies (if any):

    ```bash
    npm install
    ```

4. Run your first Node.js script:

    ```bash
    node hello-world.js
    ```

    > The `hello-world.js` file should print "Hello, Node.js!" to the console.

## Key Topics

This repository covers the following key topics:

### 1. Node.js Basics

-   Understanding the Node.js runtime
-   Working with the REPL
-   Creating and running scripts

### 2. Core Modules

-   File System (`fs`)
-   HTTP (`http`)
-   Path (`path`)
-   Events (`events`)

### 3. npm (Node Package Manager)

-   Installing packages
-   Managing dependencies
-   Creating a `package.json` file

### 4. Asynchronous Programming

-   Callbacks
-   Promises
-   Async/Await

### 5. Building an API

-   Creating a RESTful API with Express.js
-   Handling routes and middleware
-   Connecting to a database (MongoDB/MySQL)

### 6. Real-Time Communication

-   Using WebSockets with `socket.io`

## Example Projects

1. **Hello World**: A basic script to get started.
2. **Simple Server**: Create an HTTP server that serves static files.
3. **Todo API**: A CRUD API for managing tasks.
4. **Chat App**: A real-time chat application using `socket.io`.

## Resources

Here are some useful resources to aid your learning journey:

-   [Node.js Documentation](https://nodejs.org/en/docs/)
-   [MDN Web Docs: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [The Modern JavaScript Tutorial](https://javascript.info/)
-   [FreeCodeCamp Node.js Tutorials](https://www.freecodecamp.org/news/tag/nodejs/)

## Contributing

Contributions are welcome! If you have suggestions, improvements, or examples to add, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Happy coding with Node.js! 🚀
