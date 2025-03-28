# Webpack Learning Documentation

Welcome to the Webpack learning project! This document provides an overview of Webpack and how to use it effectively.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Basic Configuration](#basic-configuration)
- [Key Concepts](#key-concepts)
- [Usage](#usage)
- [Resources](#resources)

## Introduction
Webpack is a powerful module bundler for JavaScript applications. It processes your application and generates optimized bundles for deployment.

## Installation
To install Webpack and its CLI globally, use the following command:
```bash
npm install --save-dev webpack webpack-cli
```

## Basic Configuration
Create a `webpack.config.js` file in your project root:
```javascript
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
};
```

## Key Concepts
- **Entry**: The starting point of your application.
- **Output**: Where the bundled files are saved.
- **Loaders**: Transform files into modules.
- **Plugins**: Extend Webpack's functionality.

## Usage
1. Add a script to your `package.json`:
     ```json
     "scripts": {
         "build": "webpack"
     }
     ```
2. Run the build process:
     ```bash
     npm run build
     ```

## Resources
- [Webpack Official Documentation](https://webpack.js.org/)
- [Webpack GitHub Repository](https://github.com/webpack/webpack)

Happy learning!