# graphQLDummyProject

**Project Overview**

This project aims to create a GraphQL API for managing user and movie data using Apollo GraphQL. It provides queries and mutations for fetching and updating user and movie information in a dummy dataset.

**Project Features**

User Queries: The API allows clients to query user data by ID, name, or userName, and fetches user information such as ID, name, userName, and favoriteMovies.

Movie Queries: The API allows clients to query movie data by ID, name, or yearOfPublication, and fetches movie information such as ID, name, yearOfPublication, and isInTheaters.

User Mutations: The API provides mutations for creating, updating, and deleting user data. Clients can create a new user by providing name, userName, and age, update user information by ID, and delete a user by ID.

Movie Mutations: The API provides mutations for creating, updating, and deleting movie data. Clients can create a new movie by providing name, isInTheaters, and yearOfPublication, update movie information by ID, and delete a movie by ID.

**Technologies Used**

Apollo Server: A GraphQL server that provides a runtime for executing queries and mutations.

GraphQL: A query language for APIs that allows clients to request only the data they need.

Node.js: A JavaScript runtime that allows server-side execution of JavaScript code.

**Installation**

Clone the repository from GitHub.

Install the dependencies using npm install command.

Start the server using npm start command.

Access the GraphQL API endpoint at http://localhost:4000/graphql using a GraphQL client like Apollo Playground or GraphQL Playground.

**Usage**

Use queries to fetch user and movie data by ID, name, userName,favoriteMovies.

Use mutations to create, update, or delete user and movie data.

Use the GraphQL API to manage user and movie information in the dummy dataset.

**Contributing**

This project is open for contributions. You can fork the repository, make changes, and submit a pull request with your improvements.

**License**

This project is licensed under the MIT License, which is an open-source license allowing for free use, modification, and distribution of the code. Please review the license for more details.

**Credits**

This project was created by Pritam Morajkar as a demonstration of building GraphQL APIs with Apollo Server and Node.js.
