//Every type and query will be typedefs.
const { gql } = require("apollo-server");

// ggl is a variable that allows to write pure graphQL code and translate it into something that js understands
/* if we want to fetch just one user based on id we can
user(id: ID!): User! 
*/

/* In case of mutation 
You can add a new user type as input createNewUser
and add all the properties of user to it
*/
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = BRAZIL
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
    userAdded: User # Add a field for the mutation that triggers the subscription
  }

  type Subscription {
    userAdded: User # Define the subscription with the same name as the mutation
  }

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
    UKRAINE
  }
`;

module.exports = { typeDefs };
