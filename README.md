# Sorting Algorithm Implementation in TypeScript

This repository contains a TypeScript implementation of a simple sorting algorithm applied to various data structures, including arrays of numbers, strings, and linked lists. By leveraging TypeScript's robust typing system and object-oriented programming capabilities, this project showcases how to implement a classic algorithm in a type-safe environment.

## TypeScript Features

This project utilizes several key features of TypeScript, which enhance its safety and scalability:

- **Strong Typing**: TypeScript's type system ensures variables and function parameters adhere to specified types, reducing runtime errors.
- **Classes and Interfaces**: TypeScript supports modern object-oriented programming principles, allowing for the creation of classes and interfaces to define custom types and enforce structure.
- **Modules**: TypeScript modules are used to organize code into separate files for clarity and maintainability, facilitating easier management of large codebases.

## Classes

The project is structured around several key classes, each extending a base `Sorter` class that outlines the structure for sorting functionality:

- **Sorter**: An abstract class defining the template methods `compare`, `swap`, `print`, and `sort` that any sortable collection must implement.
- **NumbersCollection**: Implements the `Sorter` class to enable sorting of an array of numbers.
- **CharactersCollection**: Implements the `Sorter` class to enable sorting of a string by its characters.
- **LinkedList**: Implements the `Sorter` class to enable sorting of a linked list.

## Implementation

The sorting algorithm implemented in the `Sorter` class is a simple bubble sort, chosen for its educational value rather than its efficiency. Each subclass implements the `compare` and `swap` methods according to its specific data structure:

- **NumbersCollection** and **CharactersCollection** implement these methods to handle arrays and strings, respectively, by directly manipulating their elements.
- **LinkedList** implements these methods to operate on a linked list, a data structure consisting of nodes that hold data and a reference to the next node.

The `sort` method in the `Sorter` class iterates over the collection, using the `compare` and `swap` methods to order the elements. This demonstrates the power of polymorphism in TypeScript, where different data structures can be sorted using the same algorithm by adhering to a common interface.

# Getting Started with the Sort Project

After cloning the repository, you will need to set up your development environment to run and develop the project further. This guide assumes you have Node.js and npm installed on your machine. If not, please install them from [the official Node.js website](https://nodejs.org/).

## Installation

First, navigate to the project's root directory in your terminal. Then, install the project dependencies by running:

```bash
npm install
```

This command reads the `package.json` file and installs the required dependencies, including `concurrently`, `nodemon`, and the TypeScript compiler (assumed to be globally installed). If TypeScript is not installed globally, you may need to add it as a dev dependency.

## Compiling TypeScript

The project uses TypeScript, which needs to be compiled to JavaScript before execution. You can compile the TypeScript code to JavaScript by running:

```bash
npm run start:build
```

This script runs the TypeScript compiler in watch mode (`tsc -w`), which automatically compiles `.ts` files to `.js` files in the `build` directory whenever they are changed.

## Running the Project

To run the compiled JavaScript code with `nodemon`, which automatically restarts the node application when file changes in the directory are detected, use:

```bash
npm run start:run
```

Alternatively, you can run both the TypeScript compiler in watch mode and `nodemon` concurrently with:

```bash
npm start
```

This command utilizes the `concurrently` package to run both the `start:build` and `start:run` scripts simultaneously, making it easier to develop and test the project in real-time.

## Development Workflow

- Make changes to your TypeScript files in the project.
- The `tsc -w` command automatically compiles the changed TypeScript files to JavaScript.
- `nodemon` automatically restarts the application when it detects changes in the `build` directory, allowing you to see the effects of your changes immediately.
